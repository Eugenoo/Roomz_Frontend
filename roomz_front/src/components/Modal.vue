<template>
  <transition v-show="modalActive" name="modal-animation" class=" bg-gray-600 bg-opacity-50 fixed top-0 left-0 right-0 z-50 p-4overflow-x-hidden overflow-y-auto md:inset-0 h[calc(100%-1rem)] md:h-full">
    <div class="w-full h-full">
      <div class="bg-white rounded-lg">
          <transition name="flex modal-animation-inner">
            <div v-show="modalActive" class="modal-inner">
              <button @click="close">Close</button>
              <!--- Modal Content -->
              <slot>

              </slot>
              <button @click="close">
                Close
              </button>
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