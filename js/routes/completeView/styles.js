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
  contentText: {
    fontSize : 30,
    textAlign : 'center',
    color : '#ffa500',
    backgroundColor : 'transparent',
    top : 20,
    left: 30,
    width: w - 60
  },
  imageLogo: {
    top : 60,
    left : w/2 - 50,
    width: 100,
    height: 100,
    backgroundColor : 'red'
  },
  btnHome: {
    top : 90,
    left : w/2 - 50,
    width: 100,
    height: 40,
    padding:10,
    borderRadius:4, backgroundColor: 'white'
  }
})
