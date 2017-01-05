import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {getCorrectFontSizeForScreen} from '../../utils/multiResolution';
const {height: h, width: w} = Dimensions.get('window');
export default StyleSheet.create({
  image: {
    marginTop: 0,
    height: h/4,
    resizeMode: 'stretch'
  },
  viewScrollableTabView: {
    flex: 1,
    marginTop: 0,
    width : w,
    height: h - h/4 - 64 - 49
  },
  webView: {
    flex: 1,
    height: h - h/4 - 64 - 49 - 49
  },
  viewFooter: {
    height : 49,
    width : w,
  },
  footerStep: {
    color: '#FA9F0B',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 20),
    marginTop: 8,
    height: 33,
    marginLeft : 8
  },
  btnStart: {
    alignSelf: 'flex-end',
    marginTop: 8,
    right: 8,
    height : 33
  }
})
