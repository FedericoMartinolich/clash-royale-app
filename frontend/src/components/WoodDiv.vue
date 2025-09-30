<template>
  <div class="wood-div"></div>
</template>

<script setup>
defineOptions({
  name: "WoodDiv",
});
</script>

<style>
.wood-div {
  height: 100%;
  background-image: url("../assets/imgs/banners/wood-div.png");
  position: relative;
  z-index: 1;

  width: 100vw;
  margin-left: calc(50% - 50vw); /* centra y elimina el "espacio fantasma" */

  height: 44px;
  margin-bottom: -22px;
  margin-top: -22px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-repeat: repeat-x;
  background-size: 100% 44px;
}
</style>
