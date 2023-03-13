<template>
  <div class="hello">
    <div class="min-h-full">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Seasons</h1>
        </div>
      </header>
      <main>
          <div>
            <Modal @close="toggleModal" :modal-active="modalActive">
              <div class="modal-content">
                <h1>HGW</h1>
                <p>This is a modal message</p>
              </div>
            </Modal>
          </div>
          <div class="grid justify-center">
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Multiplier</td>
                    <td>Season Name</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="season in seasons" class="bg-gray-100 rounded-xl p-10">
                    <td>{{ season.id }}</td>
                    <td>{{ season.multiplier }}</td>
                    <td>{{ season.season_name }}</td>
                  </tr>
                  <tr>
                    <td>
                      <button @click="toggleModal" class="btn bg-red-100 hover:bg-red-400 rounded-xl p-3">Add</button>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useSeasonStore} from "../../stores/SeasonStore.js";
import Modal from "../Modal.vue";

const seasons = ref({});

const store = useSeasonStore();

const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
}

onMounted(() => {
  store.index();
  seasons.value = store.$state.seasons
})


</script>

<style scoped>

</style>