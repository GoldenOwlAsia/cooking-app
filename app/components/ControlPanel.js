import React, { Component } from 'react';
import {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DrawerMenu extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon style={styles.iconButton} name='home' size={15} />
          <Text>Trang Chu</Text>
        </View>
        <View>
          <View style={styles.menuItem}>
            <Icon style={styles.iconButton} name='home' size={15} />
            <Text>Lich Su</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon style={styles.iconButton} name='home' size={15} />
            <Text>Ve Ban</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  controlText: {
    color: 'white',
  },
  header: {
    backgroundColor: '#593f25',
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  menuItem: {
    color: '#ffffff',
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
})
