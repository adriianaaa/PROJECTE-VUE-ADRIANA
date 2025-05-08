<template>
    <header class="site-header">
      <div class="logo">Dragon Ball Z Kai</div>
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active">Inici</router-link>
        <router-link to="/personatges" exact-active-class="active">Personatges</router-link>
        <router-link to="/crud" exact-active-class="active">CRUD</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .site-header {
    background: linear-gradient(90deg, #1e1e2f, #2b2d42);
    color: #fff;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #f28dff;
    font-family: 'Orbitron', sans-serif;
  }
  
  .nav-links {
    display: flex;
    gap: 25px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #ddd;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #f28dff;
  }
  
  .active {
    color: #f28dff;
    font-weight: bold;
    border-bottom: 2px solid #f28dff;
  }
  </style>
  