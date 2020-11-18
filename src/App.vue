<template>
  <div id="app">
    <div id="nav" style='text-align:center'>
      <router-link to="/homePage">首页</router-link> |
      <router-link to="/uiComponents">ui组件库</router-link> |
      <router-link to="/axiosTest">HTTP请求</router-link> |
      <router-link to="/compositionApi">组合式api</router-link> |
      <router-link to="/vueTs">vue引TS</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

