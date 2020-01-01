<template>
    <div class="wrapper">
        <app-header></app-header>
        <app-navbar></app-navbar>
        <div>
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './layout/Header.vue'
import Navbar from './layout/Navbar.vue'
import Footer from './layout/Footer.vue'

import axios from 'axios'

export default {
    components: {
        appHeader: Header,
        appNavbar: Navbar,
        appFooter: Footer
    },
    created() {
        axios.get('/dataAqms')
        .then(res => {
            console.log(res)
            const data = res.data.message
            const params = []
            for (let key in data) {
                const param = data[key]
                param.id = key
                params.push(param)
            }
            console.log(params[1])
            const battery = params[1].BP / 5 * 100
            this.$store.commit('SET_TEMP', params[1].T)
            this.$store.commit('SET_HUM', params[1].RH)
            this.$store.commit('SET_BATTERY', battery)

            this.$store.commit('SET_SW', params[1].sW)
            this.$store.commit('SET_DW', params[1].dW)
            this.$store.commit('SET_R', params[1].R)
            this.$store.commit('SET_L', params[1].L)
        })
        .catch(error => console.log(error))
    }
}
</script>