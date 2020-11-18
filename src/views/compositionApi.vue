<template>
    <div>
        <p>链接地址：<a href='https://github.com/vuejs/composition-api'>点击进入</a></p>
        <p>npm install @vue/composition-api --save</p>
        <p>
            import Vue from 'vue'
            import VueCompositionAPI from '@vue/composition-api'
            Vue.use(VueCompositionAPI)
        </p>
        {{data.name}}
    </div>
</template>
<script>
import { ref, reactive } from '@vue/composition-api'

export default {
    setup(){
        const data = {
            name:'vue3'
        }

        return {
            data:data
        }
    }
}
</script>