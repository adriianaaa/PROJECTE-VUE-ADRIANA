<template>
    <div class="personatges">
      <h2 class="title">Personatges de Dragon Ball Z Kai - Saga Majin Buu</h2>
  
      <div v-if="loading" class="loading">🔄 Carregant dades...</div>
      <div v-else-if="error" class="error">❌ Error: {{ error }}</div>
  
      <div v-else-if="personatges.length > 0">
        <ul class="personatges-list">
          <li v-for="personatge in personatges" :key="personatge.id" class="personatge-item">
            <img :src="personatge.image" alt="Imatge" class="personatge-image" />
            <span class="personatge-name">{{ personatge.name }}</span>
          </li>
        </ul>
      </div>
  
      <div v-else class="no-data">⚠️ No s'han trobat personatges.</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true,
        error: null,
        personatges: []
      };
    },
    async mounted() {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters?limit=1000');
        const data = await response.json();
        this.personatges = data.items;
      } catch (err) {
        this.error = 'No s’han pogut carregar els personatges.';
      } finally {
        this.loading = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .personatges {
    min-height: 100vh;
    padding: 40px 20px;
    background: linear-gradient(to right, #1a1a40, #000000);
    color: #fff;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    font-size: 2rem;
    color: #f28dff;
    margin-bottom: 30px;
  }
  
  .loading, .error, .no-data {
    font-size: 1.2rem;
    margin-top: 20px;
    color: #ccc;
  }
  
  .error {
    color: #ff4d4d;
  }
  
  .personatges-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    margin-top: 20px;
    padding: 0;
  }
  
  .personatge-item {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }
  
  .personatge-item:hover {
    transform: translateY(-5px);
  }
  
  .personatge-image {
    width: 100%;
    max-width: 120px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .personatge-name {
    font-weight: bold;
    color: #ffd6ff;
  }
  </style>
  