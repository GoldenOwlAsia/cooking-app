
import InfoView from './infoView';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { sendInfo } from '../../actions/list';
const { popRoute , pushRoute } = actions;

function bindAction(dispatch) {
  return {
    sendInfo: (foodName,info) => dispatch(sendInfo(foodName,info)),
    popRoute: key => dispatch(popRoute(key)),
    pushRoute: (route,key) => dispatch(pushRoute(route,key)),
  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  url: state.list.urlReceive,
  foodName: state.list.foodNameReceive,
  list: state.list.list,
});
export default connect(mapStateToProps, bindAction)(InfoView);
