<template>
  <div class="header">
    <h3 class="heading">List Data</h3>
    <button @click="dashboardNavigation" class="dashboard-button">Back</button>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Thumbnail URL</th>
        <th>Favorite List</th>
      </tr>
      <tbody>
        <tr v-for="item in listData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>
            <a :href="item.url">{{ item.title }}</a>
          </td>
          <td><img :src="item.thumbnailUrl" /></td>
          <td>
            <button @click="markFavorite(item.id)">
              <img
                v-if="item.isFavorite"
                src="../assets/heart1.png"
                height="35"
                width="35"
              />
              <img v-else src="../assets/heart.png" height="35" width="35" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script setup lang="js">
import  { ref } from 'vue';
import { useListStore } from '../store/useListStore';
import router from '@/router';
const listStoreD= useListStore();
let listData = ref();
const listStore = () => {
  listStoreD.listFetchData().then((response) => {
        listData.value = response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

};
listStore();
const markFavorite = (id) => {
  const item = listData.value.find(element => element.id === id);
  if (item) {
    item.isFavorite = !item.isFavorite;
    listStoreD.addFavorite(item);
    updateLocalStorageFavorites(listData.value);
    console.log("Marked as favorite:", item);
  } else {
    console.log("Item not found:", id);
  }
};
const updateLocalStorageFavorites = (data) => {
  const favorites = data.filter(item => item.isFavorite);
  localStorage.setItem('favorites', JSON.stringify(favorites.map(item => item.id)));
}

const loadFavorites = () => {
  const favoritesIds = JSON.parse(localStorage.getItem('favorites') || '[]');
  listStoreD.listFetchData().then(() => {
    favoritesIds.forEach(id => {
      const item = listData.value.find(item => item.id === id);
      if (item) item.isFavorite = true;
    });
  });
}

loadFavorites();
const dashboardNavigation = () =>{
  router.push({path:'/'})
}

</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 5px;
}
.header{
  display: flex;
}
.heading{
  width: 100;
  margin: 0 auto;
  padding: 5px;
}
.dashboard-button {
  margin-bottom: 10px;
  background-color: #000;
  color: #fff;
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
  float: right;
}
</style>
