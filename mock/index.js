import Mock from 'mockjs';
import loginAPI from './login';
import getData from './getData';


Mock.mock(/\/login/, 'post', loginAPI.login);
Mock.mock('/get/header', 'post', getData.getHeaderData);