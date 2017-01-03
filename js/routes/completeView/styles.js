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
  textTitle: {
    fontSize : 30,
    textAlign : 'center',
    color : '#ffa500',
    backgroundColor : 'transparent',
    top : 20,
    left: 30,
    width: w - 60,
    height: w/2
  },
  btnHome: {
    top : 50,
    left : w/2 - 50,
    width: 100,
    height: 50,
    backgroundColor : 'white'
  },
  btnNext: {
    top : 0,
    left : 0,
    width: 50,
    height: 100,
    backgroundColor : 'transparent'
  }
})
