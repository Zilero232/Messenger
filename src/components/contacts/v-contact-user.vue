<template>
  <div class="v-contact-user" @click="toContactInfo">
    <div class="user__avatar"></div>
    <div class="user__name">
      <span>{{ contact_data.name }}</span>
    </div>
    <div class="user__status" :class="className"></div>
  </div>
</template>

<script>
export default {
  name: "v-contact-user",
  props: {
    contact_data: {
      type: Object,
      dafault: () => {},
    },
  },
  computed: {
    className() {
      return {
        'online': this.contact_data.status === "online",
        'offline': this.contact_data.status === "offline",
      };
    },
  },
  methods: {
    toContactInfo() {
        this.$emit('to-contact-info', this.contact)
    },
  },
};
</script>
