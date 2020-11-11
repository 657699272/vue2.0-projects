<template>
  <div>
    三种方式使用axios
    1、原始方式
    2、普通封装
    3、大神封装
  </div>
</template>

<script>
import axios from 'axios'
import api from '@/api/login'
import {request} from '@/api/http.js'

export default {
  mounted(){
    axios.post('/login',{user:'test'}).then(res=>{
      console.log(res)
    })

    api.login({
      method:'post',
      data:{
        user:'shenbinghui'
      }
    }).then(res=>{
      console.log(res)
    })

    request('post','/login',{user:'shenbinghui'}).then(res=>console.log(res))
  }
}
</script>
