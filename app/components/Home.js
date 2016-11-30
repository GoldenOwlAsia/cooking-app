import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './Recipes';
import styles from './styles';
import { toggleDrawer } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
    this.navigate = this.navigate.bind(this);
  }

  _getRoute() {
    return {
      navigatorBar: true,
      component: Main,
      title: 'COOKING BOOK',
      leftButtonIcon: <Icon style={styles.iconButton} name='bars' size={15} color='#ffffff' />,
      onLeftButtonPress: this.toggleDrawer.bind(this),
      passProps: { data: this.props.data, openDrawer: this.state.openDrawer }
    };
  }

  toggleDrawer() {
    this.props.toggleDrawer();
  }

  navigate(){
    this.props.navigator.push(this._getRoute());
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/landing.png')} style={styles.landingImage}>
          <TouchableOpacity onPress={this.navigate} style={styles.homeButton}>
            <Text style={{color: '#ffffff'}}>START</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {toggleDrawer})(Home);
