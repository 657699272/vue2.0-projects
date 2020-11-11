import {createApi} from './http';

const url={
    login:'/login',
    logout:'/logout',
}

export default {
    ...createApi(url,'',{})
}