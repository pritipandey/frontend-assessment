<template>
  <div class="header">
    <h3 class="heading" v-if="$route.path !== '/list'">Favorite List</h3>
  <button v-if="$route.path !== '/list'" @click="listPage" class="btn">Go to List</button>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  },
  methods:{
  listPage() {
  this.$router.push({path:'/list'})
}
  },

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFF;
  text-align: center;
  color: #2c3e50;
}
.header{
  display: flex;
}
.heading{
  width: 100;
  margin: 0 auto;
  padding: 5px;
}
.btn{
  margin-bottom: 10px;
  background-color: #000;
  color: #fff;
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
}
</style>
