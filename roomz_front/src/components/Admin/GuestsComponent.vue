<template>
  <div class="hello">
    <div class="min-h-full">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Guests</h1>
        </div>
      </header>
      <main>
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="createGuest">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="first_name">
                Guest Name
              </label>
              <input v-model="guest.first_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="Username">
            </div>
            <!-- -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="surname">
                Surname
              </label>
              <input v-model="guest.surname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surname" type="text" placeholder="Username">
            </div>
            <!-- -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="is_vip">
                IS VIP
              </label>
              <input v-model="guest.is_vip" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="is_vip" type="text" placeholder="Username">
            </div>
            <!-- -->
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Guest
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>

import {useGuestStore} from "../../stores/GuestStore.js";

const store = useGuestStore();

const guest = {
  'first_name' : null,
  'surname' : null,
  'is_vip' : null
}
function createGuest(){
  store.createGuest(guest)
}
</script>

<style scoped>

</style>