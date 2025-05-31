<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ message }}</p>
      <button @click="$emit('close')">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles/modal.css';
</style>