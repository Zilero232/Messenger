<template>
  <div class="v-header">
    <div class="v-header__back" @click="goBack" v-if="!isCoreRoute">
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div class="v-header__user-info" v-if="!isCoreRoute">
      <span>{{ currentUserChat }}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
      ...mapState(['currentUserChat']),
      isCoreRoute() {
          return this.$route.path === '/'
      }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
