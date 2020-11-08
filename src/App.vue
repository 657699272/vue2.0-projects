<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Test></Test>
    <Hello></Hello>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HuaweiButton></HuaweiButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    axios.post('/login',{user:'test'}).then(res=>{
      console.log(res)
    })

    axios.post('/get/header').then(res=>{
      console.log(res.data)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
