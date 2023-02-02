<template>
  <navbar-component></navbar-component>
  <router-view></router-view>
</template>

<script>
import NavbarComponent from "../../src/components/Admin/Navbar/NavbarComponent.vue";
export default {
  name: "AdminView",
  components: {NavbarComponent}
}
</script>

<style scoped>

</style>