import { defineStore } from "pinia";
import axios from "axios";


export const useListStore = defineStore("ListStore",{
    state: () => ({
      favListData: [],
    }),
    actions: {
      listFetchData(){
        return new Promise((resolve, reject) => {
          axios
            .get('https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&amp;_limit=10%22')
            .then((response) => {
             
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
      addFavorite(item) {
        const isAlreadyFav = this.favListData.find(fav => fav.id === item.id);
        if (!isAlreadyFav) {
          this.favListData.push(item);
        }
      },
      
    },
   
})