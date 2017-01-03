import React, {Component} from 'react';
import {Image, Text, ScrollView, View} from 'react-native';
import { Header,  Button,Title, Grid, Row, Col } from 'native-base';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class StepsView extends Component {
  constructor (props) {
    super(props);
    this.steps = 0
    this.state = {
      food: {
          id: 1,
          title: 'Sườn xào chua ngọt',
          views: 0,
          imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
          recipes: '<ul><li>2 dẻ sườn non</li><li>Cà chua: 2 quả nhỏ hoặc 1 quả lớn</li><li>1 củ hành khô, hành lá</li><li>Gia vị bao gồm : Mắm, muối, đường, tiêu</li></ul>',
          notes: '<ul style="text-align: justify;"><li>Sườn chín mềm, màu vàng đều đẹp và bóng, không bị tróc rời thịt và xương sườn.</li><li>Vị chua cay mặn ngọt &nbsp;hoà quyện vừa phải, nước cạn sền sệt quện đều vào miếng sườn.</li><li>Món ăn dậy mùi chua thơm nhè nhẹ của cà chua.</li><li>Nước sốt bóng đẹp bao ngoài miếng sườn, cắn miếng sườn có vị đậm đà ngấm vào bên trong chứ không chỉ có vị nước sốt bên ngoài.</li></ul>',
          steps: [
            {
              header: 'Ướp thịt heo',
              content: '1'
            },
            {
              header: 'Chần sườn heo',
              content: '2'
            },
            {
              header: '3',
              content: '3'
            },
            {
              header: '4',
              content: '4'
            },
            {
              header: '5',
              content: '5'
            },
            {
              header: '6',
              content: '6'
            },
            {
              header: '7',
              content: '7'
            },
            {
              header: '8',
              content: '8'
            },
            {
              header: '9',
              content: '9'
            },
            {
              header: '10',
              content: '10'
            },
            {
              header: '11',
              content: '11'
            },
            {
              header: '12',
              content: '12'
            }
          ]
        }
      }
  }
  pushRoute(route) {
    this.props.pushRoute({ key: route }, this.props.navigation.key);
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  onButtonPress(){
    this.steps = this.steps + 1
    console.log(this.steps);
  };


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
              1
            </Text>
          </View>
          {/* Text */}
          <View  >
            <Text style = {styles.contentText}>
              Suon heo chat thanh nhung mieng nho vua an, sau do so che sach voi muoi
              Suon heo chat thanh nhung mieng nho vua an, sau do so che sach voi muoi
            </Text>
          </View>
        </View>
        {/* 3 */}
        {/* containerButtonView */}
        <View style = {styles.containerButtonView}>
          {/* circleViewLeft */}
          <View style = {styles.circleViewLeft}>
            <Button style = {styles.btnBack} onPress={() => this.popRoute()}>
              Back
            </Button>
          </View>
          {/* circleViewRight */}
          <View style = {styles.circleViewRight} >
            <Button style = {styles.btnNext} onPress={() => this.onButtonPress()}>
              Next
            </Button>
          </View>
        </View>
        </View>


    )
  }
}

export default StepsView;
