<template>
    <div>
        <div class="col-md-12 card card-sensor shadow">
            <div class="row">
                <div class="col-md-3 parameter text-center">
                    <div class="icon-sensor"><i :class="[parameter.icon]" :style="iconStyle"></i></div>
                </div>
                <div class="col-md-9 paramValue text-center">
                    <h6>{{ parameter.name }}</h6>
                    <b>{{ parameter.value }} {{parameter.valueSuffix}}</b>
                </div>
            </div>                 
        </div>
    </div>
</template>

<script>
export default {
    props: ["parameter"],
    computed: {
        iconStyle() {
            return {
                "color": this.parameter.color
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        margin: 15px 10px 10px 15px;
        width: 258px;
        height: 87px;
        .parameter {
            .icon-sensor {
                font-size: 40px;
                margin: 10px 20px;
            }
        }
        .paramValue {
            margin: auto; 
        }
    }
</style>