import React, { Component } from 'react';
import {
  ListView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import Recipe from './Recipe';
import ListItem from './ListItem';
import styles from './styles';

class Recipes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.data)
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  loadDetail(id) {
    //fake get recipe
    const data = this.props.data.find(item => item.id === id);
    //
    this.props.navigator.push({
      navigatorBar: true,
      component: Recipe,
      title: data.name,
      leftButtonIcon: <Icon style={styles.iconButton} name='chevron-left' size={15} color='#ffffff' />,
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: { data: data }
    })
  }

  _renderItem(item) {
    return (
      <ListItem item={item} handlePress={this.loadDetail.bind(this, item.id)} />
    );
  }

  render() {
    return (
      <Drawer
        open={this.props.bar.isOpeningDrawer}
        ref={(ref) => this._drawer = ref}
        type="static"
        content={
          <ControlPanel />
        }
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 200
        }}
        panOpenMask={0.2}
        negotiatePan
        >
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={this._renderItem}
            contentContainerStyle={styles.listView}
            style={styles.listContainer}
          />
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {bar: state.index};
};

export default connect(mapStateToProps)(Recipes);
