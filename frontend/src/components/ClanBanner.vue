<template>
<div class="banner">
    <h1>{{ clan.name }}</h1>
    <h6 class="card-subtitle mb-2">
        Clan Tag: {{ clan.tag }}
    </h6>
</div>
</template>

<script>
export default {
  name: "ClanBanner",
  props: { clan: { type: Object, required: true}},
};
</script>

<style scoped>
.banner {
  --notch: 2vw; /* relativo al ancho del viewport */
  position: relative;
  background: #8b1c1c;
  color: white;
  width: 60vw; /* 🔹 ancho flexible */
  max-width: 400px; /* 🔹 límite en pantallas grandes */
  padding: 2vw; /* 🔹 padding relativo */
  margin: 2rem auto;
  text-align: center;
  z-index: 1;
  font-family: "Supercell-Magic";
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 2rem); /* 🔹 escalado fluido entre 1rem y 2rem */

  clip-path: polygon(
    0 0,
    100% 0,
    100% 1%,
    calc(100% - var(--notch)) 50%,
    100% 99%,
    100% 100%,
    0 100%,
    0 99%,
    var(--notch) 50%,
    0 1%
  );
}

/* 🔹 Simulación del borde */
.banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgb(255, 255, 0);
  z-index: -1;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 1%,
    calc(100% - var(--notch)) 50%,
    100% 99%,
    100% 100%,
    0 100%,
    0 99%,
    var(--notch) 50%,
    0 1%
  );
}

/* 🔹 Capa interior (relleno azul) */
.banner::after {
  content: "";
  position: absolute;
  inset: 0.5vw; /* 🔹 borde flexible */
  background: #093484;
  z-index: -1;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 1%,
    calc(100% - var(--notch)) 50%,
    100% 99%,
    100% 100%,
    0 100%,
    0 99%,
    var(--notch) 50%,
    0 1%
  );
}

/* 🔹 Ajustes extra para pantallas muy pequeñas */
@media (max-width: 500px) {
  .banner {
    width: 80vw;
    font-size: clamp(0.9rem, 3vw, 1.5rem);
    padding: 3vw;
  }
}
</style>
