<template>
  <div>
    <div>
      三种方式使用axios 1、原始方式 2、普通封装 3、大神封装
    </div>
    <div class='block'>
      <p>普通接口，例如post</p>
      <button @click="login">登录</button>
    </div>
    <div class='block'>
      <p>上传文件</p>
      <input type="file" @change="upload($event.target.files)" accept=".*"/>{{uploadMessage}}
      <p >用的这个地址<a style='color:red' href='https://www.wjx.cn/jq/27265670.aspx'>https://www.wjx.cn/jq/27265670.aspx</a></p>
      <p>【报错】<span style='color:red'>request.upload.addEventListener in not a function</span></p>
      <p>原来和mockjs有关，把项目中mockjs的引用去掉，问题迎刃而解</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '@/api/login'
import uploadApi from '@/api/upload'
import {request} from '@/api/http.js'

export default {
  data:()=>{
    return {
      uploadMessage:'',
    }
  },
  mounted(){
    
  },
  methods:{
    upload(file){
        console.log(file[0])
        uploadApi.upload({
          method:'post',
          data:{
            file:file[0],
            name:file[0].name,
            key: '27265670_75_q2_1605361545HS7f3C.jpg',
            token: '-kY3jr8KMC7l3KkIN3OcIs8Q4s40OfGgUHr1Rg4D:SD7_rEFXGouaERO7Km89M-yBTnk=:eyJzY29wZSI6InNvanVtcCIsInJldHVybkJvZHkiOiJ7XCJzaXplXCI6XCIkKGZzaXplKVwiLFwibmFtZVwiOlwiJChmbmFtZSlcIixcImtleVwiOlwiJChrZXkpXCIsXCJtaW1lVHlwZVwiOlwiJChtaW1lVHlwZSlcIn0iLCJkZWFkbGluZSI6MTc2MzA0MTQ2MiwiaW5zZXJ0T25seSI6MSwiZGV0ZWN0TWltZSI6MCwibWltZUxpbWl0IjoiaW1hZ2UvanBnO2ltYWdlL2pwZWc7aW1hZ2UvZ2lmO2ltYWdlL2JtcDtpbWFnZS9wbmc7YXBwbGljYXRpb24vcGRmO2FwcGxpY2F0aW9uL21zd29yZDthcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudDthcHBsaWNhdGlvbi92bmQubXMtZXhjZWw7YXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQ7YXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQ7YXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbjt0ZXh0L3BsYWluO2FwcGxpY2F0aW9uL3gtcmFyLWNvbXByZXNzZWQ7YXBwbGljYXRpb24veC1yYXI7YXBwbGljYXRpb24vemlwO2FwcGxpY2F0aW9uL3gtZ3ppcDt2aWRlby9tcDQ7YXBwbGljYXRpb24veC1tcGVnVVJMO3ZpZGVvL3gtZmx2O3ZpZGVvL3gtZjR2O3ZpZGVvL3dlYm07dmlkZW8vcXVpY2t0aW1lO3ZpZGVvL3gtbTR2O3ZpZGVvLzNncHA7dmlkZW8veC1tc3ZpZGVvO3ZpZGVvL3gtbXMtd212O2F1ZGlvL21wZWc7YXVkaW8veC1tcy13bWE7YXVkaW8veC13YXY7YXVkaW8vQU1SO2F1ZGlvL21wNCIsImZzaXplTGltaXQiOjQxOTQzMDR9',
          },
          onUploadProgress:(progressEvent)=>{
            let complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
            this.uploadMessage = '上传 ' + complete
          }
        }).then(res=>{
          console.log(res)
        })
    },
    login(){
      // axios.post('/login',{user:'test'}).then(res=>{
      //   console.log(res)
      // })

      api.login({
        method:'post',
        data:{
          user:'shenbinghui'
        }
      }).then(res=>{
        console.log(res)
      })

      // request('post','/login',{user:'shenbinghui'}).then(res=>console.log(res))
    }
  }
}
</script>
<style scoped>
.block{
  border:1px solid #888;
  margin:5px;
  background:#eeeeee;

}
</style>
