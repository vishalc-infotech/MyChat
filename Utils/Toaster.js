import { Toast } from 'native-base';
import {Constants} from 'expo'
import {Platform} from 'react-native';

function showToast(message, type) {
  return (
    Toast.show({
      text: message,
      textStyle:{textAlign:'center',paddingTop:Platform.OS=='ios'?0:Constants.statusBarHeight},
      duration: 1500,
      type: type,
      position:'top',

    })
  );
}

export default {
  showToast
};
