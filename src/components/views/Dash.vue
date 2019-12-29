<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <app-settings></app-settings>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <app-parameter1 v-for="parameter in parameters1" :parameter="parameter" v-bind:key="parameter"></app-parameter1>
                </div>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <app-parameter2 v-for="parameter in parameters2" :parameter="parameter" v-bind:key="parameter"></app-parameter2>
                </div>
            </div>
            <!-- <div class="col-md-12">
                <div class="row">
                    <app-parameter3 :chartDatas="chartDatas"></app-parameter3>
                </div>
            </div> -->
            <div class="col-md-12">
                <div class="row">
                    <app-line-chart v-for="chartData in chartDatas" :chartData="chartData" v-bind:key="chartData"></app-line-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Settings from './Settings.vue'
import Parameter1 from './Parameter.vue'
import Parameter2 from './Parameter2.vue'
import Parameter3 from './Parameter3.vue'
import LineChart from './LineChart.vue'

export default {
    components: {
        appSettings: Settings,
        appParameter1: Parameter1,
        appParameter2: Parameter2,
        appParameter3: Parameter3,
        appLineChart: LineChart
    },
    data() {
        return {
            parameters1: this.$store.state.parameters1,
            parameters2: this.$store.state.parameters2,
            parameters3: this.$store.state.parameters3,
            chartDatas: this.$store.state.chartDatas
        }
    }
}
</script>