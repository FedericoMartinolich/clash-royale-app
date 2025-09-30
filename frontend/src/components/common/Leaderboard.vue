<template>
<main class="text-black mt-4">
    <div id="header">
        <h1>{{title}}</h1>
        <button class="share">
            <i class="ph ph-share-network"></i>
        </button>
    </div>
    <div id="leaderboard">
        <div class="ribbon"></div>
        <table>
            <tr v-for="(elem, index) in currentRiverRaceTop5" :key="index">
              <td class="number">{{ index+1 }}</td>
              <td class="name">{{ elem.name }}</td>
              <td class="points"><img v-if="index==0" class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>{{elem.fame }}</td>
            </tr>
        </table>
    </div>
</main>
</template>

<script>
export default {
  name: "Leaderboard",
  props: {
    title: String,
    currentRiverRaceTop5: Array,
  }
}
</script>
<style>

main {
  height: 39rem;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
  box-shadow: 0px 5px 15px 8px #4343439a;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
}

#header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 2rem;
}

.share {
  width: 4.5rem;
  height: 3rem;
  background-color: #f55e77;
  border: 0;
  border-bottom: 0.2rem solid #c0506a;
  border-radius: 2rem;
  cursor: pointer;
}

.share:active {
  border-bottom: 0;
}

.share i {
  color: #fff;
  font-size: 2rem;
}

#leaderboard {
  width: 100%;
  position: relative;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  color: #141a39;
  cursor: default;
}

tr {
  transition: all 0.2s ease-in-out;
  border-radius: 0.2rem;
}

tr:not(:first-child):hover {
  background-color: #fff;
  transform: scale(1.1);
  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
  box-shadow: 0px 5px 15px 8px #e4e7fb;
}

tr:nth-child(odd) {
  background-color: #f9f9f9;
}

tr:nth-child(1) {
  color: #fff;
}

td {
  height: 5rem;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  position: relative;
}

.number {
  width: 1rem;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: left;
}

.name {
  text-align: left;
  font-size: 1.2rem;
}

.points {
  font-weight: bold;
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.points:first-child {
  width: 10rem;
}

.gold-medal {
  height: 100%;
  width: auto;
  margin-right: 0.7rem;
}

.ribbon {
  width: 110%;
  height: 5.5rem;
  top: -0.5rem;
  background-color: #5c5be5;
  position: absolute;
  left: -5%;
  -webkit-box-shadow: 0px 15px 11px -6px #7a7a7d;
  box-shadow: 0px 15px 11px -6px #7a7a7d;
}

.ribbon::before {
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  bottom: -0.8rem;
  left: 0.35rem;
  transform: rotate(45deg);
  background-color: #5c5be5;
  position: absolute;
  z-index: -1;
}

.ribbon::after {
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  bottom: -0.8rem;
  right: 0.35rem;
  transform: rotate(45deg);
  background-color: #5c5be5;
  position: absolute;
  z-index: -1;
}
</style>
