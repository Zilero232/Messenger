<template>
  <div class="v-user-chat">
    <vMessage
      v-for="(message, idx) in messages"
      :key="idx"
      :message="message"
      :number_user="idx"
    />

    <div class="input__field">
      <input
        type="text"
        class="v-user-chat__textfield"
        v-model="textValue"
        @keypress.enter="sendMessage"
      />
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import vMessage from "./v-message";
import { mapActions } from "vuex";

export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: () => {},
    },
    id: {
      type: Number,
      default: () => '',
    },
  },
  data() {
    return {
      textValue: "",
    };
  },
  computed: {},
  components: {
    vMessage,
  },
  methods: {
    ...mapActions(["SET_MESSAGE_TO_CHAT"]),
    sendMessage() {
      let user = { ...this.user };
      let chat = {
        id: this.messages.length + 1,
        time: new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        }),
        text: this.textValue,
        type: "own",
      };
      user.chat.push(chat);

      this.SET_MESSAGE_TO_CHAT({ userID: this.id, user }).then(() => {
        this.textValue = "";
      });
    },
  },
};
</script>
