import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import { selectFood } from '../../actions/list';
import HomeView from './homeView';

const { pushRoute } = actions;

function bindAction(dispatch) {
  return {
    selectFood: (url,foodName) => dispatch(selectFood(url,foodName)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(HomeView);
