<template>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-3 selectUser">
                    <app-select-user></app-select-user>
                </div>
                <div class="col-md-3 selectDevice">
                    <app-select-device></app-select-device>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            
        </div>
    </div>
</template>

<script>
import DropdownUser from './DropdownUser.vue'
import DropdownDevice from './DropdownDevice'

export default {
    components: {
        appSelectUser: DropdownUser,
        appSelectDevice: DropdownDevice
    }
}
</script>

<style lang="scss" scoped>
    .selectUser {
        margin: 0 40px 10px 0;
    }
</style>