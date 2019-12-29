<template>
    <div class="login">
        <div class="container-fluid vh-100">
            <div class="row">
                <div class="col-md-8 landing">
                    <h1><b>AQ</b>imos</h1>
                    <div class="row contentLanding">
                        <div class="col-md-6">
                            <h4>Air – It is a matter of life and death</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, debitis!</p>
                        </div>
                        <div class="col-md-6">
                            <img src="../assets/city.png" alt="">
                        </div>
                    </div>
                    <img src="../assets/logoipb.png" alt="">
                </div>
                <div class="col-md-4 formLogin vh-100">
                    <h5>Hi, welcome back!</h5>
                    <p class="text-center">Enter your e-mail and password to log in to AQimos</p>
                    <app-login></app-login>
                    <a href=""><p class="text-center">Forgot your password?</p></a>
                    <p class="text-center" id="copyright">© 2020 AQimos. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Login from './views/formLogin.vue'

export default {
    components: {
        appLogin: Login
    }
}
</script>

<style lang="scss" scoped>
    $blue: #007BFF;

    .login {
        background-color: $blue;
        .landing {
            color: #fff;
            padding: 20px 30px;
            img {
                width: 200px;
                margin-top: 20px;
            }
            .contentLanding {
                margin-top: 60px;
                h4 {
                    font-weight: bold;
                    margin-top: 20px;
                }
                p {
                    color: #fafafa;
                }
                img {
                    width: 400px;
                    float: right;
                }
            }
        }
        .formLogin {
            padding: 30px 30px;
            background-color: #fff;
            height: 100%;
            h5 {
                color: $blue;
            }
            p {
                margin: 10px 0 30px 0;
            }
            #copyright {
                margin-top: 90px;
                color: #B0B0B0;
                font-size: 10pt;
            }
        }
    }
</style>