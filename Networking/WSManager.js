import React, { Component } from 'react';
import { Linking } from 'react-native';
import ConstantLib from '../Constants/ConstantLib';
import AppPreferences from '../Preferences/AppPreferences';
import Toaster from '../Utils/Toaster';
import * as URLConstants from '../Networking/URLConstants';
let _navigator;
export default class WSManager extends Component {


  static setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
  }

  static getTopLevelNavigator() {
    console.log('drawer open called');

    return _navigator
  }

  static openTNC(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  /* Write method related to API */

  static getData(url) {
    console.log('getData', "url=="+url);
    return fetch(url)
      .then((response) => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch((error) => {
        Toaster.showToast(error.message, 'danger');
        return error
      });
  }

  static postData(url, params) {
      console.log('postData', "url=="+url);
      console.log('postData', "SESSION_KEY=="+ConstantLib.SESSION_KEY);
      console.log('postData', "params=="+params);
    
    return fetch(url, {
      method: 'POST',
      headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=UTF-8', session_key: ConstantLib.SESSION_KEY },
      body: params
    })
      .then((response) => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch((error) => {
        Toaster.showToast(error.message, 'danger');
        return error
      });
  }

  static uploadPhoto(localUri) {

    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('userfile', { uri: localUri, name: filename, type });

    return fetch(URLConstants.BASE_URL + URLConstants.IMAGE_UPLOAD, {
      method: 'POST',
      body: formData,
      headers: { 'content-type': 'multipart/form-data', session_key: ConstantLib.SESSION_KEY },
    })
      .then((response) => response.json())
      .then(responseJson => {
        console.log('\n\nResponse: - ', responseJson);
        return responseJson;
      })
      .catch((error) => {
        Toaster.showToast(error.message, 'danger');
        return error
      });
  }

  static clearLoggedData() {
    AppPreferences.clearAllData()
    ConstantLib.SESSION_KEY = ""
  }
}
