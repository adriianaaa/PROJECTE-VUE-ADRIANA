const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

// Ruta per obtenir les dades de la saga de Majin Buu
app.get('/api/getMajinBuuSagaData', async (req, res) => {
  const url = 'https://dragonball.fandom.com/wiki/Majin_Buu_Saga';

  try {
    const { data } = await axios.get(url); // Obtenir el contingut HTML de la pàgina
    const $ = cheerio.load(data); // Carregar el contingut HTML amb Cheerio

    // Extracció d'informació (per exemple, el títol i el primer paràgraf)
    const title = $('h1').text();
    const introParagraph = $('#WikiaPageHeader h1').next().text();

    const images = [];
    $('.pi-image-thumbnail').each((index, element) => {
      const imageUrl = $(element).attr('src');
      images.push(imageUrl);
    });

    // Retornar les dades com a resposta
    res.json({ title, introParagraph, images });
  } catch (error) {
    res.status(500).json({ message: 'Error al carregar les dades', error });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor backend en funcionament a http://localhost:${port}`);
});
