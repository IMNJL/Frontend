<template>
  <header class="header">
    <div class="header-content">
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle navigation">
        ☰
      </button>
      <nav :class="{ 'nav-open': isMenuOpen }">
        <router-link to="/" @click="closeMenu">Главная</router-link>
        <router-link to="/topologies" @click="closeMenu">Топологии</router-link>
        <router-link to="/gallery" @click="closeMenu">Галерея</router-link>
        <router-link to="/contacts" @click="closeMenu">Контакты</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles/header.css';
</style>