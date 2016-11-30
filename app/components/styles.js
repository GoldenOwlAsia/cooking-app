import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#f5e6d5'
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#f5e6d5'
  },
  left: {
    alignSelf: 'flex-start'
  },
  right: {
    alignSelf: 'flex-end',
  },
  navigatorBar: {
    backgroundColor: '#8a6037',
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  drawerMenu: {
    backgroundColor: '#ffffff'
  },
  tintColor: {
    color: '#ffffff'
  },
  navigatorTitle: {
    fontSize: 14
  },
  navigatorButton: {

  },
  iconButton: {
    textAlign: 'left'
  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  listItem: {
    width: 165,
    height: 150,
    margin: 10,
    backgroundColor: '#ffffff'
  },
  itemInfo:{
    backgroundColor: '#ffffff',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  itemThumbnail: {
    width: 165,
    height: 120
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 10,
    width: 100
  },
  itemViews: {
    fontSize: 10
  },
  mainImage: {
    height: 250,
    alignSelf: 'stretch'
  },
  tabContentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  tabItem: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12
  },
  landingImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeButton: {
    backgroundColor: '#8D6E63',
    shadowColor: '#ffffff',
    shadowOpacity: 0.3,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  controlPanel: {
    flex: 1
  },
  menuItem: {

  },
  menuText: {

  }
});

export default styles;
