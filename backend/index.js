import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/getClan', async (req, res) => {
  try {
    const response = await fetch(`https://api.clashroyale.com/v1/clans/${process.env.CLAN_TAG}`, {
      headers: {
        Authorization: process.env.API_TOKEN
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'API request failed' });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Backend API funcionando. Usá /getClan para ver la info del clan.');
});
