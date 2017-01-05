import React, {Component} from 'react';
import {Image, Text, ScrollView, View} from 'react-native';
import { Header,  Button,Title, Grid, Row, Col } from 'native-base';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class DetailView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      steps: 1,
      contentText: 'Hành tây, ớt chuông cắt miếng vuông cạnh 3cm.',
      food: {
          id: 1,
          title: 'Sườn xào chua ngọt',
          views: 0,
          imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
          recipes: '<ul><li>2 dẻ sườn non</li><li>Cà chua: 2 quả nhỏ hoặc 1 quả lớn</li><li>1 củ hành khô, hành lá</li><li>Gia vị bao gồm : Mắm, muối, đường, tiêu</li></ul>',
          notes: '<ul style="text-align: justify;"><li>Sườn chín mềm, màu vàng đều đẹp và bóng, không bị tróc rời thịt và xương sườn.</li><li>Vị chua cay mặn ngọt &nbsp;hoà quyện vừa phải, nước cạn sền sệt quện đều vào miếng sườn.</li><li>Món ăn dậy mùi chua thơm nhè nhẹ của cà chua.</li><li>Nước sốt bóng đẹp bao ngoài miếng sườn, cắn miếng sườn có vị đậm đà ngấm vào bên trong chứ không chỉ có vị nước sốt bên ngoài.</li></ul>',
          steps: [
            {
              header: 'Hành tây, ớt chuông cắt miếng vuông cạnh 3cm.',
              content: ' Bước 1'
            },
            {
              header: 'Sườn non chẻ dọc chặt miếng dài 4cm, ướp với 1 muỗng đường, 0.5 muỗng muối, 0.5 muỗng bột ngọt, nước tương, 1 ít tiêu, hành tím băm trong khoảng 10 phút.',
              content: 'Bước 2'
            },
            {
              header: 'Bắc chảo lên bếp, cho 1 muỗng dầu ăn vào chảo.',
              content: 'Bước 3'
            },
            {
              header: 'Tiếp tục cho dầu ăn vào 1 chiếc chảo khác, đổ dầu ăn ngập miếng sườn để nóng già, rồi trút sườn vào chiên vàng, vớt ra để ráo dầu.',
              content: 'Bước 4'
            },
            {
              header: 'Pha nước sốt cho món sườn xào chua ngọt: 1/2 muỗng giấm gạo, 1 muỗng đường, 1/2 muỗng nước tương, 1muỗng hạt nêm, 1/2 chén nước, 1 muỗng tương cà. Rồi trộn đều cho tạo thành hỗn hợp sánh đặc. Nếu ăn cay thì bạn thêm chút lát ớt vào nha!',
              content: 'Bước 5'
            },
            {
              header: 'Phi thơm tỏi, cho sườn đã chiên vào, cho nước xốt vào, xào lửa nhỏ cho sườn chín mềm trong khoảng 5 phút, thêm chút nước bột năng cho xốt sền sệt, thêm hành tây, ớt chuông vào, nêm cho sườn có vị chua ngọt dịu.',
              content: 'Bước 6'
            },
            {
              header: 'Múc sườn ra dĩa, rắc tiêu, bày rau mùi đã rửa sạch lên trên, dùng nóng với cơm.',
              content: 'Bước 7'
            }
          ]
        }
      }
  }
  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  onPressButtonBack(){
      if (this.state.steps == 1){
        this.popRoute()
      }else{
        var temp = this.state.steps - 1
        this.setState({
          steps : temp ,
          contentText : this.state.food.steps[temp - 1 ].header
        })
    }
  }
  onPressButtonNext(){
      if (this.state.steps == 7){
        this.pushRoute('completeView')
      }else{
        var temp = this.state.steps + 1
        this.setState({
          steps : temp ,
          contentText : this.state.food.steps[temp - 1].header
        })
    }
  }
  render() {
    return (
      <View >
        {/* 1 */}
        {/* headerView */}
        <Header style = {styles.headerView}>
          {/* title */}
          <Title style = {styles.title}>
            {this.state.food.title ? this.state.food.title : 'Food Detail'}
          </Title>
        </Header>
        {/* 2 */}
        {/* containerView */}
        <View style = {styles.containerView}>
          {/* numberView */}
          <View  style ={styles.numberView}>
            <Text style = {styles.numberText}>
              {this.state.steps}
            </Text>
          </View>
          {/* Text */}
          <View  >
            <Text style = {styles.contentText}>
              {this.state.contentText}
            </Text>
          </View>
        </View>
        {/* 3 */}
        {/* containerButtonView */}
        <View style = {styles.containerButtonView}>
          {/* circleViewLeft */}
          <View style = {styles.circleViewLeft}>
            <Button style = {styles.btnBack} onPress={() => this.onPressButtonBack()}>
              Back
            </Button>
          </View>
          {/* circleViewRight */}
          <View style = {styles.circleViewRight} >
            <Button style = {styles.btnNext} onPress={() => this.onPressButtonNext()}>
              Next
            </Button>
          </View>
        </View>
        </View>
    )
  }
}

export default DetailView;
