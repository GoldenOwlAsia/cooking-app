import { ToggleContainer, ToggleItem } from 'deco-ride-share-demo'

import {
  Component,
  Text,
  View,
  ScrollView,
} from 'react-native'
import { Header,  Button ,Title, Grid, Row, Col } from 'native-base';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class CompleteView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      food: {
          id: 1,
          title: 'Sườn xào chua ngọt',
          views: 0,
          imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
          recipes: '<ul><li>2 dẻ sườn non</li><li>Cà chua: 2 quả nhỏ hoặc 1 quả lớn</li><li>1 củ hành khô, hành lá</li><li>Gia vị bao gồm : Mắm, muối, đường, tiêu</li></ul>',
          notes: '<ul style="text-align: justify;"><li>Sườn chín mềm, màu vàng đều đẹp và bóng, không bị tróc rời thịt và xương sườn.</li><li>Vị chua cay mặn ngọt &nbsp;hoà quyện vừa phải, nước cạn sền sệt quện đều vào miếng sườn.</li><li>Món ăn dậy mùi chua thơm nhè nhẹ của cà chua.</li><li>Nước sốt bóng đẹp bao ngoài miếng sườn, cắn miếng sườn có vị đậm đà ngấm vào bên trong chứ không chỉ có vị nước sốt bên ngoài.</li></ul>',
          steps: [
            {
              header: 'Ướp thịt heo',
              content: '1'
            },
            {
              header: 'Chần sườn heo',
              content: '2'
            },
            {
              header: '3',
              content: '3'
            },
            {
              header: '4',
              content: '4'
            },
            {
              header: '5',
              content: '5'
            },
            {
              header: '6',
              content: '6'
            },
            {
              header: '7',
              content: '7'
            },
            {
              header: '8',
              content: '8'
            },
            {
              header: '9',
              content: '9'
            },
            {
              header: '10',
              content: '10'
            },
            {
              header: '11',
              content: '11'
            },
            {
              header: '12',
              content: '12'
            }
          ]
        }
      }
  }
  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }


  render() {
    return (
      <View >
        <ToggleContainer
          value={(this.state && this.state.option) || 'One'}
          options={['One', 'Two', 'Three', 'Four']}
          style={{padding: 10}}
          orientation={"horizontal"}
          spacing={10}
          renderItem={(option, active) => (
            <ToggleItem
              option={option}
              active={active}
              onPress={() => this.setState({option})}
              color={"rgb(74,144,226)"}
              backgroundColor={"rgb(255,255,255)"}
              borderColor={"rgba(231,231,231,1)"}
              activeColor={"rgba(255,255,255,1)"}
              activeBackgroundColor={"rgb(74,144,226)"}
              borderRadius={2}
            />
          )}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
          My Text
        </Text>
<ScrollView 
  horizontal={false}>
  
</ScrollView>
      </View>
    )
  }
}

export default CompleteView;
