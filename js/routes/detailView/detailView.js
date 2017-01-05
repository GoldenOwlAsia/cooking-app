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
      contentText: this.props.info[0].header,
      }
  }
  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 4 }, this.props.navigation.key);
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
          contentText : this.props.info[temp - 1 ].header
        })
    }
  }
  onPressButtonNext(){
      if (this.state.steps == this.props.info.length){
        this.pushRoute('completeView')
      }else{
        var temp = this.state.steps + 1
        this.setState({
          steps : temp ,
          contentText : this.props.info[temp - 1].header
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
            {this.props.foodName}
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
