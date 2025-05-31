<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/views/Header.vue'
import Footer from '@/components/views/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

<style scoped>
@import '@/assets/styles/base.css';

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 160px); /* Adjust for header and footer */
}
</style>