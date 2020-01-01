export default {
    parameters1: [
        {
            name: 'Temperature',
            series: [],
            valueSuffix: '°C',
            stops: [
                [0.34, "#76CE0A"], // green
                [0.36, "#E5B70B"], // yellow
                [0.41, "#E52D0B"] // red 
            ]
        }, 
        {
            name: 'Humidity',
            series: [],
            valueSuffix: '%',
            stops: [
                [0.2, "#E52D0B"], // red
                [0.5, "#E5B70B"], // yellow
                [1, "#76CE0A"] // green
            ]
        },
        {
            name: 'Battery Power',
            series: [],
            valueSuffix: '%',
            stops: [
                [0.15, "#E52D0B"], // red
                [0.25, "#E5B70B"], // yellow
                [1, "#76CE0A"] // green
            ]
        }
    ],
    parameters2: [
        {
            name: 'Wind Velocity',
            value: 0,
            valueSuffix: 'mph',
            icon: 'fas fa-wind',
            color: 'lightseagreen'
        },
        {
            name: 'Wind Direction',
            value: 114,
            valueSuffix: '°',
            icon: 'fas fa-compass',
            color: 'lightsalmon'
        },
        {
            name: 'Rain Fall',
            value: 0,
            valueSuffix: 'mL',
            icon: 'fas fa-cloud-rain',
            color: 'lightskyblue'
        },
        {
            name: 'Light Intensity',
            value: 779,
            valueSuffix: null,
            icon: 'far fa-sun', 
            color: 'gold'
        }
    ],
    parameters3: [
        {
            name: 'ISPU'
        },
        {
            name: 'ISPU Category'
        }
    ],
    chartDatas: [
    { 
        name: 'NO₂ Concentration',
        chartTitle: 'NO₂ Concentration', 
        yAxisTitle: 'Concentration (μg/Nm³)', 
        valueSuffix: 'μg/Nm³', 
        value: [1200, 1750, 2200, 2500, 4100, 3700, 3800, 5500, 2430, 2800],
        colors: ['#065D9B'],
        borderColor: '13px solid #065D9B',
        ispu: 50,
        ispuCat: 'Baik'
    },
    { 
        name: 'PM₁₀ Concentration',
        chartTitle: 'PM₁₀ Concentration', 
        yAxisTitle: 'Concentration (μg/Nm³)', 
        valueSuffix: 'μg/Nm3', 
        value: [1200, 1750, 2200, 2500, 4100, 3700, 3800, 5500, 2430, 2800],
        colors: ['#BE0073'],
        borderColor: '13px solid #BE0073',
        ispu: 50,
        ispuCat: 'Baik'
    },
    { 
        name: 'CO Concentration',
        chartTitle: 'CO Concentration', 
        yAxisTitle: 'Concentration (μg/Nm³)', 
        valueSuffix: 'μg/Nm3', 
        value: [1200, 1750, 2200, 2500, 4100, 3700, 3800, 5500, 2430, 2800],
        colors: ['#9CE200'],
        borderColor: '13px solid #9CE200',
        ispu: 50,
        ispuCat: 'Baik'
    },
    { 
        name: 'SO₂ Concentration',
        chartTitle: 'SO₂ Concentration', 
        yAxisTitle: 'Concentration (μg/Nm³)', 
        valueSuffix: 'μg/Nm3', 
        value: [1200, 1750, 2200, 2500, 4100, 3700, 3800, 5500, 2430, 2800],
        colors: ['#F18800'],
        borderColor: '13px solid #F18800',
        ispu: 50,
        ispuCat: 'Baik'
    },
    { 
        name: 'O₃ Concentration',
        chartTitle: 'O₃ Concentration', 
        yAxisTitle: 'Concentration (μg/Nm³)', 
        valueSuffix: 'μg/Nm3', 
        value: [1200, 1750, 2200, 2500, 4100, 3700, 3800, 5500, 2430, 2800],
        colors: ['#023960'],
        borderColor: '13px solid #023960',
        ispu: 50,
        ispuCat: 'Baik'
    }]
}