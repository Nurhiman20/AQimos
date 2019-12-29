<template>
    <div>
        <div class="col-md-12 card card-sensor shadow">
            <div class="row">
                <div class="col-md-12 parameter text-center">
                    <h6>{{ parameter.name }}</h6>
                </div>
                <div class="col-md-12 chart">
                    <app-gauge :parameter="parameter"></app-gauge>
                </div>
            </div>                 
        </div>
    </div>
</template>

<script>
import Gauge from './GaugeChart.vue';

export default {
    props: ["parameter"],
    components: {
        appGauge: Gauge
    }
    // watch: {
    //     title(newValue) {
    //         this.chartOptions.title.text = newValue;
    //     },
    //     points(newValue, oldValue) {
    //         console.log("watch firing", newValue, oldValue);
    //         this.chartOptions.series[0].data = newValue;
    //     }
    //     units(newValue) {
    //         this.chartOptions.series[0].dataLabels.format =
    //             '<div style="text-align:center"><span style="font-size:2rem;color: black">{y}</span><div>' +
    //             newValue +
    //             "</div><div/>";
    //     },
    //     min(newValue) {
    //         this.chartOptions.yAxis.min = newValue;
    //     },
    //     max(newValue) {
    //         this.chartOptions.yAxis.max = newValue;
    //     }
    // },
    // mounted() {
    //     if (typeof this.title !== "undefined") {
    //         this.chartOptions.title.text = this.title;
    //     }
    //     if (typeof this.units !== "undefined") {
    //         this.chartOptions.series[0].dataLabels.format =
    //             '<div style="text-align:center"><span style="font-size:2rem;color: black">{y}</span><div>' +
    //             this.units +
    //             "</div><div/>";
    //     }
    //     if (typeof this.min !== "undefined") {
    //         this.chartOptions.yAxis.min = this.min;
    //     }
    //     if (typeof this.max !== "undefined") {
    //         this.chartOptions.yAxis.max = this.max;
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .card {
        margin: 15px;
        padding-top: 5px;
        width: 350px;
        height: 200px;
        .parameter {
            margin: 10px 0 -10px 0;
        }
    }
</style>