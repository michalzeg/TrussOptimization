<template>
  <div>
    <!-- <Line :data="props.data" :options="options" /> -->
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Tooltip,
  LinearScale
} from 'chart.js'
import { Line } from 'vue-chartjs'

  const props = defineProps<{data: any}>();

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
    y: [
    {
          title: {
            display: true,
            text: 'Stress [N/mm2]'
          },
          
          grid: {
           
            drawBorder: false
          }
        }

      // {
      //   id: "weight",
      //   position: "left",
      //   scaleLabel: {
      //     display: true,
      //     labelString: "Total weight [kg]"
      //   }
      // },
      // {
      //   id: "stress",
      //   position: "right",
      //   scaleLabel: {
      //     display: true,
      //     labelString: "Max Stress [MPa]"
      //   }
      // }
    ],
    x: [
    {
          title: {
            display: true,
            text: 'Strain [%]'
          },
          ticks: {
          },
          grid: {
            drawBorder: false
          }
        }
      // {
      //   ticks: {
      //     maxRotation: 0
      //   },
      //   scaleLabel: {
      //     display: true,
      //     labelString: "Generation"
      //   }
      // }
    ]
  },
  tooltips: {
    callbacks: {
      title: (tooltipItems: { xLabel: any; }[], data: any): string => {
        return `Generation: ${tooltipItems[0].xLabel}`;
      }
    }
  }
};
</script>

