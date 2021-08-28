<template>
  <div class="v-contact-list">
    <vContact
      v-for="contact in contacts"
      :key="contact.id"
      :contact_data="contact"
      @to-contact-info="toContactInfo(contact)"
    />
  </div>
</template>

<script>
import vContact from "./v-contact-user.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "v-contact-list",
  components: {
    vContact,
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    ...mapActions(["FETCH_CONTACTS", "SET_USER_TO_HEADER"]),
    toContactInfo(contact) {
      this.$router.push({
        name: "contact",
        query: { id: contact.id },
      });
      this.SET_USER_TO_HEADER(contact.name)
    },
  },
  mounted() {
    this.FETCH_CONTACTS();
  },
};
</script>
