import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class ListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <TouchableOpacity style={styles.listItem} onPress={this.props.handlePress}>
        <Image style={styles.itemThumbnail} source={{uri: item.image}} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemViews}>{item.views} views</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ListItem;
