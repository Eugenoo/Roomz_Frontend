<template>
  <div class="hello">
    <div class="min-h-full">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Rooms</h1>
        </div>
      </header>
      <main>
          <div class="flex flex-row w-full">
            <div class="basis-1/4 content-center">
              <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="addRoom">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="first_name">
                      Room Name
                    </label>
                    <input v-model="room.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="Username">
                  </div>
                  <!-- -->
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="surname">
                      Daily Price
                    </label>
                    <input v-model="room.daily_price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surname" type="text" placeholder="Username">
                  </div>
                  <!-- -->
                  <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Add Room
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="basis-3/4">
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
                    name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    is reserved
                  </th>
                  <th scope="col" class="py-3 px-6">
                    is cleaned
                  </th>
                  <th scope="col" class="py-3 px-6">
                    daily price
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Action
                  </th>
                </tr>
                </thead>
                <tbody v-for="room in rooms">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="p-4 w-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{room.id}}
                  </th>
                  <td class="py-4 px-6">
                    {{room.name}}
                  </td>
                  <td class="py-4 px-6">
                    {{room.is_reserved}}
                  </td>
                  <td class="py-4 px-6">
                    {{room.is_cleaned}}
                  </td>
                  <td class="py-4 px-6">
                    {{room.daily_price}}
                  </td>
                  <td class="py-4 px-6 grid gap-1">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <button class="btn font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
    </div>
  </div>
</template>

<script setup>
import {useRoomStore} from "../../stores/RoomStore.js";
import {onMounted, ref} from "vue";

const store = useRoomStore();
const rooms = ref({});
const room = {
  'name' : null,
  'daily_price' : null
}

function addRoom(){
  store.createRoom(room)
  store.index()
}

onMounted(() => {
  store.index()
  rooms.value = store.$state.rooms
})
</script>

<style scoped>

</style>