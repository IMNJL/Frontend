<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Сетевые топологии. Все права защищены.</p>
      <p>Контакт: <a href="mailto:support@networktopologies.ru">support@networktopologies.ru</a></p>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/topologies">Топологии</router-link>
        <router-link to="/contacts">Контакты</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
@import '@/assets/styles/footer.css';
</style>