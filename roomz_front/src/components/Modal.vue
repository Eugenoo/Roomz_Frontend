<template>
  <transition v-show="modalActive" name="modal-animation" class=" bg-gray-600 bg-opacity-50 fixed top-0 left-0 right-0 z-50 p-4overflow-x-hidden overflow-y-auto md:inset-0 h[calc(100%-1rem)] md:h-full">
    <div class="w-full h-full flex justify-center items-center">
      <div class="bg-white rounded-lg w-4/5 md:w-96 h-3/5 ">
          <transition name="modal-animation-inner">
            <div v-show="modalActive" class="modal-inner">
              <div id="modalHeader">
                <button @click="close" class="p-5 bg-red-300 rounded-xl">x</button>
              </div>
              <!--- Modal Content -->
              <slot class="p-5">

              </slot>
              <div id="modalFooter">
                <button @click="close" class="p-5">
                  Close
                </button>
              </div>

            </div>
          </transition>
        </div>
      </div>
  </transition>

</template>

<script setup>

const props = defineProps({
  "modalActive":false
})

const emit = defineEmits(['toggleModal']);

const close = () => {
 return emit('close');
}
</script>

<style scoped>

</style>