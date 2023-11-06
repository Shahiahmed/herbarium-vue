<template>
  <Map />
  <div class="card flex justify-content-center">
    <Chart
      type="polarArea"
      :data="chartData"
      :options="chartOptions"
      class="w-full md:w-30rem"
    />
  </div>
</template>

<script>
import Map from "./Map.vue";

export default {
  components: {
    Map,
  },
  data() {
    return {
      chartData: null,
      chartOptions: null,
    };
  },
  mounted() {
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
  },
  methods: {
    setChartData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              documentStyle.getPropertyValue("--red-500"),
              documentStyle.getPropertyValue("--green-500"),
              documentStyle.getPropertyValue("--yellow-500"),
              documentStyle.getPropertyValue("--bluegray-500"),
              documentStyle.getPropertyValue("--blue-500"),
            ],
            label: "My dataset",
          },
        ],
        labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

      return {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    },
  },
};
</script>
