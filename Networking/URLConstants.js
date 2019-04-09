import ConstantLib from '../Constants/ConstantLib';

export const STAGING_URL = 'http://192.168.0.24:3000/'; // Staging Url
export const PRODUCTION_URL = 'http://api.squad.social/api/'; // Production Url

export var BASE_URL = ConstantLib.IS_PRODUCTION ? PRODUCTION_URL : STAGING_URL;

//SignUp Screen
export const SignUp = BASE_URL + 'signup';