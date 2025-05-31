<template>
  <div class="contacts">
    <h1>Услуги и поддержка</h1>
    <section class="services">
      <h2>Предлагаемые услуги</h2>
      <ul>
        <li>Электромонтажные работы</li>
        <li>Системы пожарной сигнализации</li>
        <li>Телефония</li>
        <li>Системы контроля доступа (СКУД)</li>
        <li>Настройка и подключение интернета</li>
        <li>Установка локальных и оптоволоконных сетей</li>
        <li>Настройка оборудования (маршрутизаторы, серверы, видеонаблюдение и др.)</li>
      </ul>
    </section>
    <section class="support">
      <h2>Техническая поддержка</h2>
      <p>Свяжитесь с нами через форму ниже для любых вопросов или поддержки.</p>
      <form @submit.prevent="submitForm">
        <label for="name">Имя:</label>
    <input v-model="name" id="name" placeholder="Ваше имя" required />

    <label for="email">Электронная почта:</label>
    <input
      v-model="email"
      id="email"
      placeholder="Ваш email"
      type="email"
      required
      @blur="validateEmail"
    />
    <span class="error-message" v-if="emailError">{{ emailError }}</span> <!-- Вывод ошибки -->

    <label for="message">Сообщение:</label>
    <textarea v-model="message" id="message" placeholder="Ваше сообщение" required></textarea>

    <button type="submit">Отправить</button>
  </form>
      <Modal v-if="showModal" @close="showModal = false" :message="modalMessage" />
    </section>
  </div>
</template>

<script>
import Modal from '@/components/views/Modal.vue'

export default {
  name: 'Contacts',
  components: { Modal },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showModal: false,
      modalMessage: ''
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.emailError = 'Введите корректный email (например: user@example.com)';
        alert("Введите корректный email");
        return false;
      }
      this.emailError = '';
      return true;
    },
    submitForm() {
      // Проверяем валидность email перед отправкой
      if (!this.validateEmail()) {
        this.modalMessage = this.emailError;
        this.showModal = true;
        return;
      }

      if (!this.name || !this.email || !this.message) {
        this.modalMessage = 'Заполните все поля!';
      } else {
        this.modalMessage = 'Сообщение отправлено!';
      }
      this.showModal = true;
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles/contacts.css';
</style>