<!--<template src="./Home.html"></template>
<script src="./Home.js"></script>
<style src="./Home.css" ></style>-->
<template>
  <div id="home">
    <img src="@/assets/logo.png">
    <h1>Vue.js</h1>
    <h2>sample</h2>
    <!-- <h3>By {{ 'author' }}</h3> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>

