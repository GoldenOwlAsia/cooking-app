import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class HomeView extends Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  //   list: React.PropTypes.arrayOf(React.PropTypes.array),
  //   selectItem: React.PropTypes.func,
  //   openDrawer: React.PropTypes.func,
  //   pushRoute: React.PropTypes.func,
  //   reset: React.PropTypes.func,
  //   navigation: React.PropTypes.shape({
  //   key: React.PropTypes.string,
  //   }),
  // }
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
            {this.props.name}
          </Title>
        </Header>
        <Content>
          <Grid style={styles.mt}>
            {this.props.list.map((row, i) => {
              return (
                <Row key={i}>
                  {row.map((col, j) => {
                    return (
                      <Col key={j} style={styles.col}>
                        <TouchableOpacity style={styles.item}
                          onPress={() => this.pushRoute('infoView', col.id,col.title)}>
                          <Image style={styles.colImage} source={{uri: col.imageUrl}}>
                          </Image>
                          <Row style={styles.caption}>
                            <Text style={styles.title}>
                              {col.title}
                            </Text>
                            <Text style={styles.textViews}>
                              {col.views} view
                            </Text>
                          </Row>
                        </TouchableOpacity>
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
          </Grid>
        </Content>
      </Container>
    )
  }
  /* Method Action */
  pushRoute(route, index,title) {
    this.props.selectItem(index,title)
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key)
  }
}
export default HomeView;
