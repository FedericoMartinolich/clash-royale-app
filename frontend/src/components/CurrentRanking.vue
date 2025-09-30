<template>
    <div class="background-green">
        <div class="supercell-container">
            <WoodBanner :texto="'Current Ranking'" />
            <Leaderboard :title="'River Race'" :currentRiverRaceTop5="currentRiverRaceTop5"/>
        </div>
    </div>
</template>

<script>
import WoodBanner from './common/WoodBanner.vue';
import Leaderboard from './common/Leaderboard.vue';
export default {
    name: "CurrentRanking",
    components: { WoodBanner, Leaderboard },
    props: { currentRiverRaceTop5: { type: Array, required: true}},
};
</script>