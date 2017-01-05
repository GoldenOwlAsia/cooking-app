import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';

import { closeDrawer } from './actions/drawer';
import { statusBarColor } from './themes/base-theme';

import BlankPage from './components/blankPage';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sideBar';

import Introduction from './routes/introduction';
import HomeView from './routes/homeView/';
import InfoView from './routes/infoView';
import DetailView from './routes/detailView';
import CompleteView from './routes/completeView';

import HistoryView from './routes/historyView';
import ProfileView from './routes/profileView';

const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {
  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
    key: React.PropTypes.string,
    routes: React.PropTypes.array,
    }),
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      // exit app if
      if (routes[routes.length - 1].key === 'home' || routes[routes.length - 1].key === 'login'
          || routes[routes.length - 1].key === 'introduction') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  _renderScene(props) {
    switch (props.scene.route.key) {
      case 'homeView':
        return <HomeView />;
      case 'infoView':
        return <InfoView />;
      case 'detailView':
        return <DetailView/>;
      case 'completeView':
        return <CompleteView/>;
      case 'historyView':
        return <HistoryView/>;
      case 'profileView':
        return <ProfileView/>;
      case 'splashscreen':
        return <SplashPage />;
      case 'login':
        return <Login />;
      case 'introduction':
        return <Introduction />;
      case 'blankPage':
        return <BlankPage />;
      default :
        return <Introduction />;
    }
  }
  render() {
      return (
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          type="overlay"
          tweenDuration={150}
          content={<SideBar />}
          tapToClose
          acceptPan={false}
          onClose={() => this.closeDrawer()}
          openDrawerOffset={0.6}
          panCloseMask={0.6}
          styles={{
            drawer: {
              shadowColor: '#000000',
              shadowOpacity: 0.8,
              shadowRadius: 3,
            },
          }}
          tweenHandler={(ratio) => {  //eslint-disable-line
            return {
              drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
              main: {
                opacity: (2 - ratio) / 2,
              },
            };
          }}
          negotiatePan
        >
          <StatusBar
            backgroundColor={statusBarColor}
            barStyle="default"
          />
          <NavigationCardStack
            navigationState={this.props.navigation}
            renderOverlay={this._renderOverlay}
            renderScene={this._renderScene}
          />
        </Drawer>
      );
    }
  }
//   render() {
//     return (
//       <Drawer
//         ref={(ref) => { this._drawer = ref; }}
//         type="static"
//         tweenDuration={150}
//         content={<SideBar />}
//         tapToClose={true}
//         acceptPan={true}
//         onClose={() => this.closeDrawer()}
//         openDrawerOffset={0.6}
//         panCloseMask={0.6}
//         styles={{
//           drawer: {
//             shadowColor: '#000000',
//             shadowOpacity: 0.8,
//             shadowRadius: 3,
//           },
//         }}
//         tweenHandler={(ratio) => {  //eslint-disable-line
//           return {
//             drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
//             main: {
//               opacity: (2 - ratio) / 2,
//             },
//           };
//         }}
//         negotiatePan
//       >
//         <StatusBar
//           backgroundColor={statusBarColor}
//           barStyle="default"
//         />
//         <NavigationCardStack
//           navigationState={this.props.navigation}
//           renderOverlay={this._renderOverlay}
//           renderScene={this._renderScene}
//         />
//       </Drawer>
//     );
//   }
// }
function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}
const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation,
});
export default connect(mapStateToProps, bindAction)(AppNavigator);
