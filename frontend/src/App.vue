<template>
  <div class="background-blue">
    <div class="supercell-container text-black" v-if="clan">
      <ClanBanner :clan="clan"/>
      <ClanInfo :clan="clan"/>
      <Members :clan="clan"/>
    </div>
  </div>
  <WoodDiv />

  <HallOfFame :mostGivingPlayer="mostGivingPlayer" :POTS="POTS" :POTW="POTW"/>
  <WoodDiv />

  <CurrentRanking :currentRiverRaceTop5="currentRiverRaceTop5"/>
  <WoodDiv />

  <Contact />
</template>

<script>
import Members from "./components/Members.vue";
import ClanBanner from "./components/ClanBanner.vue";
import ClanInfo from "./components/ClanInfo.vue";
import HallOfFame from "./components/HallOfFame.vue";
import Contact from "./components/Contact.vue";

/* common */
import WoodDiv from "./components/WoodDiv.vue";
import CurrentRanking from "./components/CurrentRanking.vue";

export default {
  name: "App",
  components: {
    ClanBanner,
    Members,
    ClanInfo,
    WoodDiv,
    HallOfFame,
    CurrentRanking,
    Contact,
  },
  data() {
    return {
      clan: null,
      currentRiverRace: null,
      
      riverRaceLog: [],
      currentRiverRaceTop5: [],

      POTS: null,
      POTW: null,

      /* Hall Of Fame */
      mostGivingPlayer: null,
      bestPlayerOnLadder: null,
    };
  },
  computed: {
    leaders() {
      return this.clan?.memberList.filter(
        (m) => m.role === "leader" || m.tag === "#88CRCPCJ0"
      ) || [];
    },
    coLeaders() {
      return this.clan?.memberList.filter(
        (m) => m.role === "coLeader" && m.tag !== "#88CRCPCJ0"
      ) || [];
    },
    elders() {
      return this.clan?.memberList.filter((m) => m.role === "elder") || [];
    },
    members() {
      return this.clan?.memberList.filter((m) => m.role === "member") || [];
    },
  },
  methods: {
    async getBaseUrl() {
      return (window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost")
        ? "http://localhost:3000"
        : "https://clash-royale-app.onrender.com";
    },

    async getClan() {
      const baseUrl = await this.getBaseUrl();

      fetch(`${baseUrl}/getClan`)
        .then((response) => response.json())
        .then((data) => {
          this.clan = data;
          /* console.log(this.clan); */
        })
        .then(() => {
          /*  */
          let sortedByDonations = [...this.clan.memberList].sort((a, b) => b.donations - a.donations);
          this.mostGivingPlayer = sortedByDonations[0];
          /* console.log(this.mostGivingPlayer); */
          /*  */
        })
        .catch((err) => console.error("Error:", err));
    },

    async getCurrentRiverRace() {
      const baseUrl = await this.getBaseUrl();

      fetch(`${baseUrl}/getCurrentRiverRace`)
        .then((response) => response.json())
        .then((data) => {
          this.currentRiverRace = data;
          /* console.log(this.currentRiverRace); */
        })
        .then(() => {
          this.currentRiverRaceTop5 = this.currentRiverRace.clan.participants
            .sort((a, b) => b.fame - a.fame)
            .slice(0, 5);
          console.log("Current River", this.currentRiverRaceTop5);
        })
    },

    async getRiverRaceLog() {
      const baseUrl = await this.getBaseUrl();

      fetch(`${baseUrl}/getRiverRaceLog`)
        .then((response) => response.json())
        .then((data) => {
          this.riverRaceLog = data;
          console.log('riverRaceLog:', data);
        })
        .then(() => {
          const items = this.riverRaceLog.items;

          if (!items || items.length === 0) return;

          // === POTW (última semana: sectionIndex más alto) ===
          const lastSection = items.reduce((max, item) =>
            item.sectionIndex > max.sectionIndex ? item : max, items[0]
          );

          const fameMapLast = {};
          lastSection.standings.forEach(standing => {
            standing.clan.participants.forEach(p => {
              fameMapLast[p.name] = (fameMapLast[p.name] || 0) + p.fame;
            });
          });

          this.POTW = Object.entries(fameMapLast)
            .map(([name, fame]) => ({ name, fame }))
            .sort((a, b) => b.fame - a.fame)[0];

          // === POTS (toda la temporada: sumar todas las secciones) ===
          const fameMapSeason = {};
          items.forEach(section => {
            section.standings.forEach(standing => {
              standing.clan.participants.forEach(p => {
                fameMapSeason[p.name] = (fameMapSeason[p.name] || 0) + p.fame;
              });
            });
          });

          this.POTS = Object.entries(fameMapSeason)
            .map(([name, fame]) => ({ name, fame }))
            .sort((a, b) => b.fame - a.fame)[0];

          console.log("POTW:", this.POTW);
          console.log("POTS:", this.POTS);
        })

        .catch((err) => console.error("Error:", err));
    },
  },
  mounted() {
    this.getClan();
    this.getCurrentRiverRace();
    this.getRiverRaceLog();
  },
};
</script>