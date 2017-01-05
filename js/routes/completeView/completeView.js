import React, {Component} from 'react';
import {Text,View, Image } from 'react-native';
import ButtonCustom from './Button';
import { Header , Button, Title, Icon } from 'native-base';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class CompleteView extends Component {

  constructor (props) {
    super(props);
    this.state = {
      }
  }
  replaceRoute(route) {

    this.props.replaceAt('completeView', { key: route }, this.props.navigation.key);
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  render() {
    return (
      <View >
          {/* 1 */}
          {/* headerView */}
          <Header style = {styles.headerView}>
            {/* title */}
            <Title style = {styles.title}>
              Sườn xào chua ngọt
            </Title>
          </Header>
          <View style = {styles.containerView}>
            {/* 2 */}
            {/* containerView */}
            <Text style = {styles.contentText}>
              Chuc Ban May Man Lan Sau
            </Text>
            <Image style = {styles.imageLogo}>
            </Image>
            <ButtonCustom
              containerStyle={styles.btnHome}
              style = {{color : '#8D6437'}}
              onPress={() => this.popRoute()}>
              Home
            </ButtonCustom>
          </View>
      </View>

    )
  }
}

export default CompleteView;
