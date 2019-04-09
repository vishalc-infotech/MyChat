import React, { Component } from 'react';
import ConstantLib from '../Constants/ConstantLib';


export default class Utility extends Component {

  static log(object) {
    if (!ConstantLib.IS_PRODUCTION) {
      console.log(object);
    }
  }

}
