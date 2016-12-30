import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {getCorrectFontSizeForScreen} from '../../utils/multiResolution';
const {height: h, width: w} = Dimensions.get('window');
export default StyleSheet.create({
  headerView: {
    backgroundColor : '#8D6437',
    width: w,
    height: 64
  },
  title: {
    color : '#ffffff'
  },
  containerView: {
    backgroundColor : '#ffe4b5',
    width: w,
    height: h - 64

  },
  numberView: {
    backgroundColor : '#ffffff',
    top : 20,
    left: (w - 50 )/2,
    width: 50,
    height: 50,
    borderRadius : 25
  },
  numberText: {
    fontSize : 30,
    textAlign : 'center',
    color : '#ffa500',
    backgroundColor : 'transparent',
    top : 10,
    left: 10,
    width: 30,
    height: 30
  },
  circleViewLeft:{
    backgroundColor : '#8D6437',
    top : h - 64 - 50 - 100,
    left: - 50,
    width: 100,
    height: 100,
    borderRadius : 50
  },
  circleViewRight:{
    backgroundColor : '#8D6437',
    top : h - 64 - 50 - 100 - 100,
    left: w - 50,
    width: 100,
    height: 100,
    borderRadius : 50
  },
  btnBack: {
    top : 0,
    left : 50,
    width: 50,
    height: 100,
    backgroundColor : 'transparent'
  },
  btnNext: {
    top : 0,
    left : 0,
    width: 50,
    height: 100,
    backgroundColor : 'transparent'
  }
})
