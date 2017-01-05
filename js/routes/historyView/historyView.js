import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class HistoryView extends Component {

  /* 1. constructor */
  constructor (props) {
    super(props);
  }
  /* 2. render */
  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header style = {{backgroundColor : '#8D6437'}}>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
          <Title>
            HISTORY
          </Title>
        </Header>
        <Content>

        </Content>
      </Container>
    )
  }
  /* Method Action */
  pushRoute(route, url,foodName) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key)
  }
}
export default HistoryView;
