<template>
    <div class="cards-grid">
        <slot />
    </div>
</template>

<script>
export default {
  name: "CardContainer"
}
</script>

<style>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* máximo 2 columnas */
  gap: 16px;
}
</style>