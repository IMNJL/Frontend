# Веб-сайт «Топологии локальных сетей» - Vue.js SPA

## Установка и запуск

```bash
# 1. Клонирование репозитория
git clone https://github.com/gr1hsan1a/network-topologies.git
cd network-topologies

# 2. Установка зависимостей
npm install

# 3. Установка Vue CLI (если требуется)
npm install -g @vue/cli

# 4. Установка Vue Router
npm install vue-router@4

# 5. Запуск сервера разработки
npm run dev
# Запуск dev-сервера (обычно на http://localhost:5173)
npm run dev

# Сборка для production
npm run build

# Предпросмотр production-сборки
npm run preview

# Проверка версий Node.js и npm
node -v
npm -v
```
### Основные зависимости(.json)
```package.json

{
  "name": "network-topologies",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.5.1"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.4",
    "vite": "^5.4.19"
  }
}
```

- Приложение будет доступно по адресу: ```http://localhost:5173``` после выполнения ```npm run dev```

