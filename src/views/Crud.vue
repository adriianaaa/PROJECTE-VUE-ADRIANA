<template>
    <div class="crud">
      <h2 class="title">CRUD de Personatges - Saga Majin Buu</h2>
  
      <!-- Formulari per afegir un personatge -->
      <form @submit.prevent="afegirPersonatge" class="form">
        <input type="text" v-model="nouPersonatge.nom" placeholder="Nom del personatge" class="input" required />
        <input type="url" v-model="nouPersonatge.imatge" placeholder="URL de la imatge" class="input" required />
        <button type="submit" class="submit-btn">➕ Afegir</button>
      </form>
  
      <p v-if="missatgeError" class="error-message">⚠️ {{ missatgeError }}</p>
  
      <!-- Llista de personatges -->
      <ul class="personatges-list">
        <li v-for="personatge in personatges" :key="personatge.id" class="personatge-item">
          <div class="info">
            <img v-if="personatge.imatge" :src="personatge.imatge" alt="Imatge" class="personatge-image" />
            <span class="personatge-name">{{ personatge.nom }}</span>
          </div>
          <button @click="eliminarPersonatge(personatge.id)" class="delete-btn">🗑️ Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nouPersonatge: {
          nom: '',
          imatge: ''
        },
        personatges: JSON.parse(localStorage.getItem('personatges')) || [
          { id: crypto.randomUUID(), nom: 'Goku', imatge: 'https://upload.wikimedia.org/wikipedia/en/0/01/Goku_anime.png' },
          { id: crypto.randomUUID(), nom: 'Vegeta', imatge: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Vegeta_Dragon_Ball.png' },
          { id: crypto.randomUUID(), nom: 'Gohan', imatge: 'https://upload.wikimedia.org/wikipedia/en/1/10/Gohan_Adult.png' }
        ],
        missatgeError: ''
      };
    },
    methods: {
      afegirPersonatge() {
        if (!this.nouPersonatge.nom || !this.nouPersonatge.imatge) {
          this.missatgeError = "Has d’omplir tots els camps.";
          return;
        }
  
        const urlPattern = /^https?:\/\/[^\s$.?#].[^\s]*$/i;
        if (!urlPattern.test(this.nouPersonatge.imatge)) {
          this.missatgeError = "La URL de la imatge no és vàlida.";
          return;
        }
  
        this.personatges.push({
          id: crypto.randomUUID(), // ID únic
          nom: this.nouPersonatge.nom,
          imatge: this.nouPersonatge.imatge
        });
  
        this.nouPersonatge.nom = '';
        this.nouPersonatge.imatge = '';
        this.missatgeError = '';
        localStorage.setItem('personatges', JSON.stringify(this.personatges));
      },
      eliminarPersonatge(id) {
        this.personatges = this.personatges.filter(p => p.id !== id);
        localStorage.setItem('personatges', JSON.stringify(this.personatges));
      }
    }
  };
  </script>
  
  <style scoped>
  .crud {
    padding: 40px 20px;
    background: linear-gradient(135deg, #2b2d42, #1e1e2f);
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    color: #f2f2f2;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
  }
  
  .title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    color: #f28dff;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
  }
  
  .input {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    border: 2px solid #f28dff;
    border-radius: 8px;
    background: #fff;
    color: #333;
  }
  
  .submit-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #f28dff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #d500f9;
  }
  
  .error-message {
    color: #ff4d4d;
    text-align: center;
    font-weight: bold;
  }
  
  .personatges-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
  
  .personatge-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .personatge-item:hover {
    transform: translateY(-5px);
  }
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .personatge-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .personatge-name {
    font-size: 18px;
    font-weight: bold;
    color: #ffd6ff;
  }
  
  .delete-btn {
    margin-top: 10px;
    padding: 6px 12px;
    background-color: #ff6f61;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .delete-btn:hover {
    background-color: #ff4433;
  }
  </style>
  