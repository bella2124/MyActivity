<template>
<div id="app">
   <el-card>
           <div slot="header">
        <span><b>Weather</b></span>
      </div>
       <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>
  <section v-else>
    <div v-if="loading">Loading...</div>
    </section>
      <el-row :gutter="24">
      <el-col :span="8">
    <table border style="width: 100%" class="b">
        <el-table-column> {{weather}}</el-table-column>
        </table>
      </el-col>
      </el-row>
  </el-card>
</div>
</template>
<script>
import axios from 'axios'
window.axios = require('axios')
export default {
  data () {
    return {
        loading: true,
      errored: false,
      weather: null,
      id: null
      
    
    }
  },
  mounted () {
    axios 
      .get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?goal=forecast&aggregateHours=24&shortColumnNames=false&sendAsDatasource=false&allowAsynch=false&contentType=csv&unitGroup=us&key=HI0J0GHKND6SBZ3DKX4IXMDVR&locations=Davao') 
      .then(response => (this.weather = response.data))
    //    .then(function (response) {
    // // handle success
    // console.log(response);
    // })
  //    params: {
  //     id: null
      
  // })
    .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
     
     axios.post('https://api.github.com/users/mapbox', {
   Login: 'login',
    ID: 'id'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  },
filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  }
}

</script>
<style scoped>
.b {
 position: relative;
 margin-left: 50px;
 margin-right: 50px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.c {
  position:fixed;
  margin-left: 120px;
  margin-right:100px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.p {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>