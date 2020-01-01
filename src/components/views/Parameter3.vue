<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow" :style="borderStyle">
                    <div class="row">
                        <div class="col-md-12 parameter text-center">
                            <h6>ISPU</h6>
                        </div>
                        <div class="col-md-12 paramValue text-center">
                            <b>{{ chartData.ispu }}</b>
                        </div>
                    </div>   
                </div>              
            </div>
            <div class="col-md-6">
                <div class="card shadow" :style="borderStyle">
                    <div class="row">
                        <div class="col-md-12 parameter text-center">
                            <h6>Kategori ISPU</h6>
                        </div>
                        <div class="col-md-12 paramValue text-center">
                            <b>{{ chartData.ispuCat }}</b>
                        </div>
                    </div>  
                </div>                   
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["chartData"],
    computed: {
        borderStyle() {
            return {
                "border-left": this.chartData.borderColor
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        margin: 0px 0px 10px 23px;
        padding: 3px;
        width: 500px;
        height: 65px;
        // border-left: 13px solid lightskyblue;
        border-radius: 10px;
        .parameter {
            margin: auto;
        }
        .paramValue {
            b {
                font-size: 15pt;
            }
        }
    }
</style>