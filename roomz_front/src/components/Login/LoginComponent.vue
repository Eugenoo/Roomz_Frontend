<template>
  <div class="flex justify-center content-center">
    <div class="border p-5">
      <form method="post" @submit.prevent="login">
        <div>
          <label>Login</label>
          <input v-model="user.email" type="text" class="border rounded-xl ml-5"/>
        </div>
        <div>
          <label>Password</label>
          <input v-model="user.password" type="password" class="border rounded-xl ml-5"/>
        </div>
        <button class="btn bg-orange-700 text-white rounded-xl p-2">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
  import {useUserStore} from "../../stores/UserStore.js";

  const store = useUserStore();
  const user = {
    'email' : '',
    'password' : '',
    'token' : ''
  }

  function login()
  {
    store.login(user);
  }
</script>

<style scoped>

</style>