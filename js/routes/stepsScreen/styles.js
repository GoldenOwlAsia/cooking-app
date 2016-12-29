import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {getCorrectFontSizeForScreen} from '../../utils/multiResolution';
const {height: h, width: w} = Dimensions.get('window');
export default StyleSheet.create({
  viewContainer: {
    left: 0,
    width: w,
    height: h - 64
  },
  number: {
    textAlign: 'center',
    backgroundColor : 'yellow',
    borderRadius: 50,
    fontSize : 17,
    width: 50,
    height: 50,
    paddingVertical: 20
  }
})
