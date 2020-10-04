<template>
  <div id="app">
    <ClassicWindow>
      <index></index>
    </ClassicWindow>
  </div>
</template>

<script>
import ClassicWindow from 'components/windows/classic'
import index from 'components/views/index'
export default {
  name: 'App',
  components: {
    ClassicWindow,
    index
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body,html{
  width: 100vw;
  height: 100vh;
  box-shadow: 1px 1px 3px gray;
  overflow: hidden;
}
.hidebar{

}
.hidebar::-webkit-scrollbar{
  display: none;
}
#app {
  width: 100%;
  height: 100%;
}
.left-bar{
  width: 45px;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: #6cf;
}
</style>
