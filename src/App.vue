<template>
  <div id="app">
    <my-header></my-header>
    <router-view v-wechat-title='$route.meta.title'/>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
