<template>
<div id="app">
   <el-card>
           <div slot="header">
        <span><b>Bitcoin</b></span>
      </div>
       <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>
  <section v-else>
    <div v-if="loading">Loading...</div>
    </section>
      <el-row :gutter="24">
      <el-col :span="8">
        <el-card class="tile-indigo">
       <b class="b"> {{info.bpi.USD.description}}</b><br>
       <p class="p"><b>code:</b> {{info.bpi.USD.code}}<br>
        <b>rate:</b> {{info.bpi.USD.rate}}<br>
        <b>symbol:</b> {{info.bpi.USD.symbol}}<br>
     <b>rate_float:</b> {{info.bpi.USD.rate_float}}</p>
        </el-card>
      </el-col>
       <el-col :span="8">
            <el-card class="tile-indigo">
       <b class="b"> {{info.bpi.GBP.description}}</b><br>
       <p class="p"> <b>code:</b> {{info.bpi.GBP.code}}<br>
        <b>rate:</b> {{info.bpi.GBP.rate}}<br>
        <b>symbol:</b> {{info.bpi.GBP.symbol}}<br>
        <b>rate_float:</b> {{info.bpi.GBP.rate_float}}</p>
            </el-card>
      </el-col>
       <el-col :span="8">
           <el-card class="tile-indigo">
        <b class="c"> {{info.bpi.EUR.description}}</b><br>
      <p class="p">  <b> code:</b> {{info.bpi.EUR.code}}<br>
         <b>rate:</b> {{info.bpi.EUR.rate}}<br>
        <b>symbol:</b> {{info.bpi.EUR.symbol}}<br>
        <b>rate_float:</b> {{info.bpi.EUR.rate_float}}</p>
            </el-card>
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
      info: null,
      id: null
      
    
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json') 
      .then(response => (this.info = response.data))
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
  position:fixed;
  margin-left: 60px;
  margin-right:10px;
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