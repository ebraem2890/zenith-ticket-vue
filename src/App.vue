<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
}
body{
  background: #f6f8fb;
  padding: 0;
  margin: 0;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid tomato;
}
.register button {
    width: 100px;
    height: 40px;
    border: none;
    background: tomato;
    color: white;
    border-radius: 20px;
    margin-left: 10px;
}
</style>
