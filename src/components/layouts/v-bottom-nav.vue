<template>
  <div class="v-bottom-nav">
    <router-link
      :to="{ name: item.name }"
      v-for="(item, idx) in spisoklinksPage"
      :key="idx"
    >
      <i class="material-icons">{{ item.icon }}</i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spisoklinksPage: [
        {
          icon: "person_pin",
          name: "contacts",
        },
        {
          icon: "chat",
          name: "chats",
        },
        {
          icon: "settings",
          name: "contacts",
        },
        {
          icon: "call",
          name: "contacts",
        },
        {
          icon: "home",
          name: "contacts",
        },
      ],
    };
  },
};
</script>
