<script>
import { Bar, Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, options);
  }
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0
    }
  },
  legend: {
    display: true
  },
  title: {
    display: false,
    text: "Total weight"
  },
  scales: {
    yAxes: [
      {
        id: "weight",
        position: "left",
        scaleLabel: {
          display: true,
          labelString: "Total weight [kg]"
        }
      },
      {
        id: "stress",
        position: "right",
        scaleLabel: {
          display: true,
          labelString: "Max Stress [MPa]"
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          maxRotation: 0
        },
        scaleLabel: {
          display: true,
          labelString: "Generation"
        }
      }
    ]
  },
  tooltips: {
    callbacks: {
      title: (tooltipItems, data) => {
        return `Generation: ${tooltipItems[0].xLabel}`;
      }
    }
  }
};
</script>

