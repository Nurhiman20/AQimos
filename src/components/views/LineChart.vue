<template>
    <div class="lineChart">
        <hr>
        <div class="col-md-12 card shadow chart">
            <highcharts :options="options" ref="highcharts"></highcharts>
        </div>
        <div class="col-md-12">
            <!-- <div class="row"> -->
                <app-parameter3 :chartData="chartData"></app-parameter3>
            <!-- </div> -->
        </div>    
    </div>
</template>

<script>
import Parameter3 from './Parameter3'

export default {
    props: ['chartData'],
    components: {
        appParameter3: Parameter3
    },
    data() {
        return {
            options: {
                chart: {
                    height: 300,
                    width: 1060
                },
                title: {
                    text: this.chartData.chartTitle,
                    x: -20 //center
                },
                // subtitle: {
                //     text: "Source: NodeMCU Device",
                //     x: -20
                // },
                xAxis: {
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
                },
                yAxis: {
                    title: {
                        text: this.chartData.yAxisTitle
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: this.chartData.valueSuffix
                },
                colors: this.chartData.colors,
                // legend: {
                //     layout: 'vertical',
                //     align: 'right',
                //     verticalAlign: 'middle',
                //     borderWidth: 0
                // },
                series: [{
                    showInLegend: false,
                    name: this.chartData.name,
                    data: this.chartData.value
                }]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.lineChart {
    margin-top: 40px;
    .chart {
        margin: 20px 10px;
        width: 100%;
        // height: 100%;
    }
}
</style>