<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/* 整体布局样式 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  text-decoration: none;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  height: 100%;
  background-color: rgb(232, 234, 235);
}

/* 菜单路径 */
.heading-top{
    padding: 8px 15px;
    font-size: 12px;
    line-height: 24px;
    margin-bottom: 10px;
    background-color: #c9cccf;
    border-radius: 4px;
    border: 1px solid #eee;
    color: #777;
}
</style>
