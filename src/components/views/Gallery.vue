<template>
  <div class="gallery">
    <h1>Галерея топологий</h1>
    <div class="slider">
      <button @click="prevSlide">←</button>
      <div class="slide">
        <img :src="images[currentSlide].file" :alt="images[currentSlide].alt" />
        <p>{{ images[currentSlide].caption }}</p>
      </div>
      <button @click="nextSlide">→</button>
    </div>
  </div>
</template>

<script>
import starImage from '@/assets/pics/star.png'
import ringImage from '@/assets/pics/ring.png'
import busImage from '@/assets/pics/bus.png'

export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        { file: busImage, alt: 'Топология шина', caption: 'Топология шина: все устройства подключены к одному кабелю.' },
        { file: starImage, alt: 'Топология звезда', caption: 'Топология звезда: устройства подключены к центральному концентратору или коммутатору.' },
        { file: ringImage, alt: 'Топология кольцо', caption: 'Топология кольцо: устройства соединены в кольцевую структуру.' }
      ],
      currentSlide: 0
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles/gallery.css';
</style>