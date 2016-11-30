import React, { Component } from 'react';
import {
  View,
  Image,
  TabBarIOS,
  Text
} from 'react-native';
import styles from './styles';

class Recipe extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: 1
    }
  }
  _renderContent(type) {
    switch (type) {
      case 'ingredient':
        const ingredientView = this.props.data.ingredients.map((item, index) =>
          <Text style={styles.tabItem} key={index}>* {item}</Text>
        );
        return (
          <View style={styles.tabContentContainer}>{ingredientView}</View>
        );
      case 'note':
        const noteView = this.props.data.notes.map((item,index) =>
          <Text style={styles.tabItem} key={index}>* {item}</Text>
        );
        return (
          <View style={styles.tabContentContainer}>{noteView}</View>
        );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.mainImage} source={{uri: this.props.data.image}} />
        <TabBarIOS
          unselectedTintColor='#ffffff'
          tintColor='#f5e6d5'
          barTintColor='#8a6037'
          style={styles.tabContainer}
        >
          <TabBarIOS.Item
            title='Nguyen Lieu'
            selected={ this.state.selectedTab === 1 }
            onPress={() => { this.setState({selectedTab: 1}) }}
          >
            { this._renderContent('ingredient') }
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title='Ghi Chu'
            selected={ this.state.selectedTab === 2 }
            onPress={() => { this.setState({selectedTab: 2}) }}
          >
            { this._renderContent('note') }
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

export default Recipe;
