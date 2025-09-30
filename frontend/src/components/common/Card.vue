<template>
<article class="card-blue">
  <div class="card__content">
    <h3>{{ title }}</h3>
    <slot /> <!-- Aquí pueden entrar otros componentes -->
  </div>
</article>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String
  }
}
</script>
<style>
/* CSS */
:root { --card-radius: 12px; --card-height: 220px; --overlay: rgba(0,0,0,0.35); }

.card-blue {
  --bg: url('../../assets/imgs/backgrounds/card-blue-bg.png');

  position: relative;
  border-radius: var(--card-radius);
  overflow: hidden;
  min-height: var(--card-height);
  display: flex;
  align-items: flex-start;  /* alinea arriba en vez de abajo */
  justify-content: center;  /* centra horizontalmente */
  background-image: var(--bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  border: 4px solid rgba(246, 197, 0, 0.576);
}

/* overlay para mejorar contraste */
.card-blue::before{
  content: "";
  position: absolute;
  inset: 0;
  background: var(--overlay);
  z-index: 0;
}

/* contenido sobre la imagen */
.card__content {
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 16px;
  text-align: center;  /* centra el texto */
}

/* tipografías y texto */
.card__content h3{ margin: 0 0 6px 0; font-size: 1.1rem; }
.card__content p{ margin: 0; font-size: 0.9rem; opacity: 0.95; }
</style>
