import React, { Component } from 'react';
import {
  Navigator,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import styles from './styles';

const fakeData = [
  {
    id: "1",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 1232,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  },
  {
    id: "2",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 4300,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  },
  {
    id: "3",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 2301,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  },
  {
    id: "4",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 1232,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  },
  {
    id: "5",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 4300,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  },
  {
    id: "6",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 2301,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  },
  {
    id: "7",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 4300,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  },
  {
    id: "8",
    name: 'Lorem ipsum dolor',
    image: 'https://meovatdoisong.net/wp-content/uploads/2015/01/suon-chien-s%E1%BA%A3-ot-cay.jpg',
    views: 2301,
    ingredients: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit'
    ],
    notes: [
      'Ut dignissim sodales odio ut sollicitudin.',
      'Curabitur tempor sollicitudin rutrum.',
      'Nam mollis molestie molestie.',
      'Nunc id mattis sapien.'
    ],
    steps: [
      {
        index: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      },
      {
        index: 2,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lorem ligula, vitae rhoncus metus elementum eget. Fusce finibus diam eu lorem ultricies pellentesque.'
      }
    ],
    created_at: 1467274652
  }
];

class App extends Component {

  renderScene(route, navigator) {
    const navigatorBar = route.navigatorBar ?
    (
      <View style={styles.navigatorBar}>
        <TouchableOpacity onPress={route.onLeftButtonPress}>{route.leftButtonIcon}</TouchableOpacity>
        <TouchableOpacity onPress={route.onLeftButtonPress}><Text style={[styles.tintColor, styles.navigatorButton]}>{route.leftButtonTitle}</Text></TouchableOpacity>
        <Text style={[styles.tintColor, styles.navigatorTitle]}>{route.title}</Text>
        <TouchableOpacity onPress={route.onRightButtonPress}>{route.rightButtonIcon}</TouchableOpacity>
        <TouchableOpacity onPress={route.onRightButtonPress}><Text style={[styles.tintColor, styles.navigatorButton]}>{route.rightButtonTitle}</Text></TouchableOpacity>
      </View>
    ) : null;
    console.log('passProps');
    console.log(route.passProps);
    return (
      <View style={styles.container}>
        {navigatorBar}
        <route.component navigator={navigator} {...route.passProps} />
      </View>
    );
  }

  render() {
    return(
      <Navigator
        initialRoute={{
          navigatorBar: false,
          component: Home,
          passProps: { data: fakeData }
        }}
        renderScene={this.renderScene}
        style={styles.container}
      />
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
