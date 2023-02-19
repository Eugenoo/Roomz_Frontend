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
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              ID
            </th>
            <th scope="col" class="py-3 px-6">
              first name
            </th>
            <th scope="col" class="py-3 px-6">
              surname
            </th>
            <th scope="col" class="py-3 px-6">
              vip
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
          </thead>
          <tbody v-for="guest in store.guest">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="p-4 w-4">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{guest.id}}
            </th>
            <td class="py-4 px-6">
              {{guest.first_name}}
            </td>
            <td class="py-4 px-6">
              {{guest.surname}}
            </td>
            <td class="py-4 px-6">
              {{guest.is_vip}}
            </td>
            <td class="py-4 px-6 grid gap-1">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>
</template>

<script setup>

import {useGuestStore} from "../../stores/GuestStore.js";
import {onMounted} from "vue";

const store = useGuestStore();

const guest = {
  'first_name' : null,
  'surname' : null,
  'is_vip' : null
}
function createGuest(){
  store.createGuest(guest)
}

onMounted(() => {
  store.index()
})
</script>

<style scoped>

</style>