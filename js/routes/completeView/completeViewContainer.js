import CompleteView from './completeView';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
const {
  replaceAt,popRoute,
} = actions;


function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(CompleteView);
