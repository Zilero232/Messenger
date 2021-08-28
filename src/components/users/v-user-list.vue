<template>
  <div class="v-users-list">
    <vUser v-for="(chat, idx) in chats" :key="idx" :user_data="chat" :number_user="idx" />
  </div>
</template>

<script>
import vUser from "./v-user";
import { mapActions, mapState } from "vuex";

export default {
  name: "v-users-list",
  components: {
    vUser,
  },
  computed: {
    ...mapState(["chats"]),
  },
  methods: {
    ...mapActions(["FETCH_CHATS", "SET_USER_TO_HEADER"]),
  },
  mounted() {
    this.FETCH_CHATS();
    this.SET_USER_TO_HEADER();
  },
};
</script>
