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
  "https://clash-royale-app.onrender.com", // prod back
  "https://twincrowns.onrender.com" // prod front
];


app.use(cors({
  origin: function (origin, callback) {
    console.log("CORS check for:", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      // 🔹 aceptar si es undefined o está en la lista
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  }
}));




// 🔹 Función auxiliar para hacer fetch a la API
const fetchFromCR = async (endpoint) => {
  const clanTag = process.env.CLAN_TAG; // ya con %23
  const url = `https://api.clashroyale.com/v1/clans/${clanTag}${endpoint}`;

  console.log("👉 Fetching:", url); // debug

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  });

  const text = await response.text();

  if (!response.ok) {
    console.error("❌ API error:", response.status, text);
    throw new Error(`API request failed: ${response.status}`);
  }

  return JSON.parse(text);
};


// 🔹 Ruta para info general del clan
app.get('/getClan', async (req, res) => {
  try {
    console.log("CLAN_TAG:", process.env.CLAN_TAG);
    console.log("API_TOKEN:", process.env.API_TOKEN ? "OK" : "MISSING");

    const data = await fetchFromCR('');
    res.json(data);
  } catch (err) {
    console.error("❌ Error en /getClan:", err.message);
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

// 🔹 Ruta para historial de War
app.get('/getWarLog', async (req, res) => {
  try {
    const data = await fetchFromCR('/warlog');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔹 Ruta para War actual
app.get('/getCurrentWar', async (req, res) => {
  try {
    const data = await fetchFromCR('/currentwar');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);

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
    - /getCurrentRiverRace → Carrera actual<br>
    - /getWarLog → Historial de guerras<br>
    - /getCurrentWar → Guerra actual<br>
    <br>
    Nota: Esta API es para uso exclusivo de mi proyecto Clash Royale App.<br>
  `);
});
