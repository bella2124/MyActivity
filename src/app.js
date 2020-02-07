import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = process.env.BASE_URL;
export default axios;

window.axios = require('axios')

 const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key")
    .then(response => {this.results = response.data.results})
  }

  });
