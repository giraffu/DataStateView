<!--
 * @Author: chuzeyu 3343447088@qq.com
 * @Date: 2023-06-21 17:26:24
 * @LastEditors: chuzeyu 3343447088@qq.com
 * @LastEditTime: 2023-06-25 11:37:40
 * @FilePath: \DataStateView\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script>
import Menu from './components/Menu.vue'
export default  {
  name: 'App',
  components:{
    Menu,
  }
}

</script>

<template>

  <Menu class="menu"></Menu>

</template>

<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }

  .tableFill{
    position: absolute;
    top: 600px;
    left: 5px;
    z-index: 10;
    cursor: pointer;
  }
</style>
