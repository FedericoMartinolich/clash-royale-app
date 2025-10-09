<template>
  <div class="background-header">
    <div class="header-container">
      <div class="header-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.background-header {
  background-image: url("../assets/imgs/wallpapers/CR-5k.jpg");
  background-size: cover;
  background-position: center;
  min-height: 500px;
}

.header-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

img {
  padding-top: 70px;
  width: 100%;
  height: auto;
  display: block;
}

.header-content {
  position: relative;
  top: -20%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transform: scale(1.5);
  padding: 150px;
}

@media (max-width: 1410px) {
  .header-content {
    top: -10%;
    transform: scale(1.2);
  }
}
</style>
