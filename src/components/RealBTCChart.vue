<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.$http.get('http://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => {
        this.renderChart({
          labels: Object.keys(response.data.bpi),
          datasets: [
            {
              label: 'Cours BitCoin',
              backgroundColor: '#f87979',
              data: Object.values(response.data.bpi)
            }
          ]
        })
      })
  }
}
</script>
