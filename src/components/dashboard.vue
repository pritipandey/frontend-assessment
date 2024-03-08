<template>
    <table>
      <tr>
        <th>ID</th>
      <th>Title</th>
      <th>Thumbnail URL</th>
      </tr>     
      <tbody>
        <tr v-for="item in listStore.favListData" :key="item.id">
        <td>{{ item.id }}</td>
        <td>
          <a :href="item.url">{{ item.title }}</a>
        </td>
        <td><img :src="item.thumbnailUrl" /></td> 
        </tr>        
      </tbody>   
    </table>  
</template>

<script  setup lang="js">
import { useListStore } from "../store/useListStore";
const listStore = useListStore();
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 5px;
}
</style>
