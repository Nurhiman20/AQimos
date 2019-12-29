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

export default {
    components: {
        appHeader: Header,
        appNavbar: Navbar,
        appFooter: Footer
    }
}
</script>