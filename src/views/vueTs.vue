<template>
    <div>
        <p>vue项目中使用ts</p>
        <a href="https://www.jianshu.com/p/9eca70b033da">参考文档</a>
        <p>npm install --save-dev typescript</p>
        <p>npm install --save-dev @vue/cli-plugin-typescript</p>
        <p>新增tsconfig.json文件</p>
        <p>main.js改成main.ts</p>
        <p>好用的插件</p>
        <p>vue-class-component</p>
        <p>vue-property-decorator</p>
        <p>{{ValA}}</p>
        <p>{{ValB}}</p>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class vueTs extends Vue{
    ValA: string = "hello world";
    ValB: number = 1;

    mounted(){
        console.log(this.ValA)
    }
}
</script>