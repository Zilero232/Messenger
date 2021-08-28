<template>
    <div class="v-main-wrapper">
        <v-header />

        <router-view />

        <v-bottom-nav />
    </div>
</template>

<script>
import vHeader from './layouts/v-header.vue'
import VBottomNav from './layouts/v-bottom-nav.vue'

export default {
    components: {
        vHeader,
        VBottomNav
    }
}
</script>