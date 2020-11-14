import {createApi} from './http';

const url={
    upload:'https://wjx-z0.qiniup.com',
}

export default {
    ...createApi(url,'',{
        apiBaseUrl:'',
        isFormData:true,
    })
}