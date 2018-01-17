<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.$http.get('http://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=2017-12-01&end=2018-01-01')
      .then(response => {
        console.log(response.data)
        this.renderChart({
          labels: Object.keys(response.data.bpi),
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: Object.values(response.data.bpi)
            }
          ]
        })
      })
  }
}
</script>
