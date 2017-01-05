import React, {Component} from 'react';
import {Image, Text, ScrollView, View, WebView} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Title, Grid, Row, Col} from 'native-base';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class InfoView extends Component {
  /* 1. constructor */
  constructor (props) {
    super(props);

    this.state = {
      food: {
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
  /* 2. render */
  render() {
    return (
      <Container theme={myTheme}>
        {/* headerView */}
        <Header style = {{backgroundColor : '#8D6437'}}>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>{this.props.foodName}</Title>
        </Header>
        {/* viewContainer All*/}
        <View>
          {/* viewContainer Image */}
          <View>
            <Image style={styles.image}  source={{uri: this.props.url}}>
            </Image>
          </View>
          {/* viewContainer ScrollableTabView */}
          <View style={styles.viewScrollableTabView}>
            <ScrollableTabView tabBarBackgroundColor={'#F4E8D1'}
                tabBarActiveTextColor={'#825526'} tabBarInactiveTextColor={'#825526'}
                tabBarUnderlineStyle={{backgroundColor:'#825526' , borderColor : '#825526' , borderBottomWidth : 0.1 , borderBottomColor : '#825526'}}>
              <ScrollView tabLabel='Nguyên liệu'>
                <WebView style={styles.webView}
                  source={{html: '<body bgcolor="F4E8D1">' + this.state.food.recipes + '</body>'}}>
                </WebView>
              </ScrollView>
              <ScrollView tabLabel='Ghi chú' >
                <WebView style={styles.webView}
                  source={{html: '<body bgcolor="F4E8D1">' + this.state.food.notes + '</body>'}}>
                </WebView>
              </ScrollView>
            </ScrollableTabView>
          </View>
          {/* viewContainer viewFooter */}
          <View style={styles.viewFooter}>
            <Grid style={{backgroundColor:'#fff'}}>
              <Col>
                <Text style={styles.footerStep}>
                  {this.state.food.steps.length} Bước
                </Text>
              </Col>
              <Col>
                <Button onPress={() =>
                  this.pushRoute('detailView',this.props.foodName,this.state.food.steps)}
                  style={styles.btnStart} primary >
                  BẮT ĐẦU
                </Button>
              </Col>
            </Grid>
          </View>
        </View>
        </Container>
    )
  }
  /* Method Action */
  pushRoute(route,foodName,info) {
    this.props.sendInfo(foodName,info);
    this.props.pushRoute({ key: route, index: 3 }, this.props.navigation.key);
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
}

export default InfoView;
