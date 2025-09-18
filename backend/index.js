import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://127.0.0.1:5500", // Live Server / abrir HTML en browser
  "http://localhost:5173", // Vite
  "https://clash-royale-app.onrender.com" // prod
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  }
}));


// 🔹 Función auxiliar para hacer fetch a la API
const fetchFromCR = async (endpoint) => {
  const clanTag =process.env.CLAN_TAG; // convierte # en %23
  const response = await fetch(`https://api.clashroyale.com/v1/clans/${clanTag}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};

// 🔹 Ruta para info general del clan
app.get('/getClan', async (req, res) => {
  try {
    const data = await fetchFromCR('');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔹 Ruta para historial de River Races
app.get('/getRiverRaceLog', async (req, res) => {
  try {
    const data = await fetchFromCR('/riverracelog');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔹 Ruta para River Race actual
app.get('/getCurrentRiverRace', async (req, res) => {
  try {
    const data = await fetchFromCR('/currentriverrace');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => console.log(`Public IP: ${data.ip}`))
    .catch(() => console.log('Could not fetch public IP'));
});

app.get('/', (req, res) => {
  res.send(`
    Backend API funcionando 🚀<br>
    - /getClan → Info del clan<br>
    - /getRiverRaceLog → Historial de River Races<br>
    - /getCurrentRiverRace → Carrera actual
  `);
});
