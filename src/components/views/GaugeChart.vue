<template>
    <div>
        <highcharts :options="options" ref="highcharts"></highcharts>
    </div>
</template>

<script>
export default {
    props: ["parameter"],
    data() {
        return {
            options: {
                chart: {
                    type: "solidgauge",
                    backgroundColor: null,
                    height: 150
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tooltip: {
                    enabled: false
                },
                pane: {
                    center: ["50%", "88%"],
                    size: '160%',
                    startAngle: -90,
                    endAngle: 90,
                    background: {
                        innerRadius: '60%',
                        outerRadius: '100%',
                        shape: 'arc'
                    }
                },
                yAxis: {
                    stops: this.parameter.stops,
                    min: 0,
                    max: 100,
                    labels: {
                        enabled: false
                    },
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    labels: {
                        y: 16
                    }
                },
                plotOptions: {
                    solidgauge: {
                        innerRadius: "60%",
                        borderWidth: "100px"
                    }
                },
                credits: {
                    enabled: false
                },
                series: [
                    {
                        name: this.parameter.name,
                        data: this.parameter.series,
                        dataLabels: {
                            format:
                                '<div style="text-align:center;">' +
                                '<span style="font-size:25px">{y}</span><br/>' +
                                '<span style="font-size:12px;opacity:0.4">'+ this.parameter.valueSuffix + 
                                '</span></div>',
                            borderColor: null,
                            y: 20,
                            align: "center",
                            useHTML: true
                        },
                        tooltip: {
                            valueSuffix: this.parameter.valueSuffix
                        }
                    }
                ]
            }
        }
    }
}
</script>