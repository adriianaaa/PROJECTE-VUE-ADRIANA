<template>
    <div class="home">
      <main class="main-content">
        <h1 class="main-title">Benvingut a la pàgina de Dragon Ball Z Kai - Saga Majin Buu</h1>
        <p class="description">Explora els personatges, dades i curiositats d’aquesta èpica saga!</p>
  
        <div class="buttons-container">
          <router-link to="/personatges" class="button">🔍 Veure Personatges</router-link>
          <router-link to="/crud" class="button">🛠️ CRUD Personatges</router-link>
        </div>
  
        <div class="image-container">
          <img :src="MajinBuuImage" alt="Majin Buu" class="majin-buu-image" />
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import MajinBuuImage from '../assets/MajinBuuImage.jpg';
  
  export default {
    data() {
      return {
        MajinBuuImage
      };
    }
  };
  </script>
  
  <style scoped>
  .home {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a40 0%, #000000 100%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
  
  .main-content {
    max-width: 900px;
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 40px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1s ease;
  }
  
  .main-title {
    font-size: 2.5rem;
    color: #f28dff;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .description {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #ccc;
  }
  
  .buttons-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .button {
    padding: 14px 28px;
    background-color: #f28dff;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 12px;
    text-decoration: none;
    transition: transform 0.3s, background-color 0.3s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .button:hover {
    background-color: #d960ff;
    transform: scale(1.05);
  }
  
  .image-container {
    margin-top: 30px;
  }
  
  .majin-buu-image {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    transition: transform 0.4s ease;
  }
  
  .majin-buu-image:hover {
    transform: scale(1.03);
  }
  
  /* Animació suau al carregar */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive */
  @media (max-width: 600px) {
    .main-title {
      font-size: 1.8rem;
    }
  
    .button {
      width: 100%;
      text-align: center;
    }
  
    .main-content {
      padding: 20px;
    }
  }
  </style>
  