<template>
  <div class="hello">
    <h1>Cours du BitCoin</h1>
    <div class="card main-chart-container">
      <MyChart
        :chartData="mainChartData"
        :options="mainChartOptions"></MyChart>
    </div>
    <input type="date" v-model="start">
    <input type="date" v-model="end">
    <button class="button is-primary" @click="updateChart">Refresh</button>
  </div>
</template>

<script>
// import MyChart from './CoursBTC'
// import MyChart from './RealBTCChart'
import MyChart from './ReactiveChart'

export default {
  name: 'HomePage',
  components: { MyChart },
  data () {
    return {
      start: '2017-01-01',
      end: '2018-01-01',
      mainChartData: {},
      mainChartOptions: {}
    }
  },
  methods: {
    updateChart: function () {
      this.$http.get(`http://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=${this.start}&end=${this.end}`)
        .then(response => {
          console.log(response.data)
          this.mainChartData = {
            labels: Object.keys(response.data.bpi),
            datasets: [
              {
                label: 'Cours BitCoin',
                backgroundColor: '#285979',
                data: Object.values(response.data.bpi)
              }
            ]
          }
        })
    }
  },
  created: function () {
    this.$http.get('http://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR')
      .then(response => {
        console.log(response.data)
        this.mainChartData = {
          labels: Object.keys(response.data.bpi),
          datasets: [
            {
              label: 'Cours BitCoin',
              backgroundColor: '#f87979',
              data: Object.values(response.data.bpi)
            }
          ]
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$font-stack:    Helvetica, sans-serif;
$primary-color: #f33;

@import '../../node_modules/bulma/bulma.sass'

body, h1
  font: 100% $font-stack;
  color: $primary-color !important;

.main-chart-container
  width: 60vw;
  margin: 2em 20vw;

h1, h2
  font-weight: normal;

u
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983;

</style>
