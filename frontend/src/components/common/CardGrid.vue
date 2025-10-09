<template>
    <div :class="containerClass">
        <slot />
    </div>
</template>

<script>
export default {
  name: "CardGrid",
  computed: {
    containerClass() {
      const slot = this.$slots.default?.() || [] // Cuenta cantidad de elementos
      console.log('slot', slot)
      return slot.length == 3 ? "cards-row" : "cards-grid";
    }
  },
}
</script>

<style scoped>

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* máximo 2 columnas */
  gap: 16px;
}

.cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  justify-items: center;
  margin-top: 100px;
}
</style>