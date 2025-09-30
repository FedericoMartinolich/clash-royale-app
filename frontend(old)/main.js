const app = {
  data() {
    return {
      clan: null,
      currentRiverRace: null,
      riverRaceHistory: null,
    };
  },
  methods: {
    getClan() {
      // Detectar si estoy en local o producción
      const baseUrl =
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost"
          ? "http://localhost:3000"
          : "https://clash-royale-app.onrender.com";

      fetch(`${baseUrl}/getClan`)
        .then((response) => response.json())
        .then((data) => {
          this.clan = data;
          console.log(this.clan);
        })
        .catch((err) => console.error("Error:", err));
    },
    getCurrentRiverRace() {
      const baseUrl =
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost"
          ? "http://localhost:3000"
          : "https://clash-royale-app.onrender.com";
      fetch(`${baseUrl}/getCurrentRiverRace`)
        .then((response) => response.json())
        .then((data) => {
          this.currentRiverRace = data;
          console.log(this.currentRiverRace);
        })
        .catch((err) => console.error("Error:", err));
    },
    getRiverRaceHistory() {
      const baseUrl =
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost"
          ? "http://localhost:3000"
          : "https://clash-royale-app.onrender.com";
      fetch(`${baseUrl}/getRiverRaceHistory`)
        .then((response) => response.json())
        .then((data) => {
          this.riverRaceHistory = data;
          console.log(this.riverRaceHistory);
        })
        .catch((err) => console.error("Error:", err));
    },
  },
  mounted() {
    // Se ejecuta cuando la instancia de Vue está montada
    this.getClan();
    this.getCurrentRiverRace();
    this.getRiverRaceHistory();
  },
};
const _app = Vue.createApp(app);