import DetailView from './detailView';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

const { popRoute,pushRoute } = actions;

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
    pushRoute: (route,key) => dispatch(pushRoute(route,key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  foodName: state.list.foodNameReceive,
  info: state.list.infoReceive,
});

export default connect(mapStateToProps, bindAction)(DetailView);
