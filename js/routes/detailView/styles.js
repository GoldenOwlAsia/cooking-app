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
    height: h - 64 - 100

  },
  containerButtonView: {
    backgroundColor : '#ffe4b5',
    width: w,
    height: 100

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
    fontSize : 20,
    textAlign : 'center',
    color : '#ffa500',
    backgroundColor : 'transparent',
    top : 15,
    left: 0,
    width: 50,
    height: 20
  },
  contentText: {
    fontSize : 15,
    textAlign : 'center',
    color : '#ffa500',
    backgroundColor : 'transparent',
    top : 50,
    left: 50,
    width:w - 50*2
  },
  circleViewLeft:{
    backgroundColor : '#8D6437',
    top : 0 ,
    left: - 50,
    width: 100,
    height: 100,
    borderRadius : 50
  },
  circleViewRight:{
    backgroundColor : '#8D6437',
    top : - 100 ,
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
