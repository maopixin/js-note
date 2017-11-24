## Vuex的下载、引入、初始化
1. 在npm使用中  ***npm i -S vuex*** 命令来下载vuex
2. 在项目文件的入口main.js中引入
```javascript
import Vue from 'vue';//引入vue
import Vuex from 'vuex';//引入vuex

Vue.use(Vuex)//使用插件

let store = new Vuex.store({//初始化store实例
    state:{//状态（数据）
        n:0
    },
    mutations:{//修改state的方法
        changeN(state,num){
            state.n = num;
        }
    }
})


new Vue({
    el:"#app",
    store//在这里注册
})
```

## 在单文件组件中使用
```javascript
<template>

  <section @click="addN">//在这里通过click绑定的事件来修改n
    {{numN}}//在这里使用计算属性来渲染
  </section>

</template>

<script>

export default {
  methods:{
    addN(){
      this.$store.commit('change', 3);//在这里通过this.$store.commit(事件名称, 3)来修改
    }
  },
  computed: { 
    numN(){
      return this.$store.state.n
    },
  }
}
</script>



```

