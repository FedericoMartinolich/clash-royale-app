<template>
    <div class="background-purple">
        <div class="supercell-container">
            <WoodBanner :texto="'Hall Of Fame'" />

            <SpecialCard class="mb-4">
                <h2>🏆 PLAYER OF THE SEASON 🏆</h2>
                <button class="btn-supercell bg-yellow gigant-text m-3">{{ POTS?.name }}</button>
            </SpecialCard>

            <CardGrid>
                <Card :title="'The Most Giving Player'">
                    <p><img src="../assets/imgs/emotes/40546ecf-8010-4597-a0a5-9860ee843142.png" alt=""></p>
                    <button class="bg-white btn-supercell p-2 m-1">{{ mostGivingPlayer?.name }}</button>
                    <p><strong>Donations:</strong> {{ mostGivingPlayer?.donations }}</p>
                </Card>
                <Card :title="'Player of the Week'">
                    <p><img src="../assets/imgs/items/clash-royale-clash-of-clans-brawl-stars-trophy-supercell-png-favpng-C5FSZ6Zb5Fq9f16Bu7UbCL2mp-removebg-preview.png" alt=""></p>
                    <button class="bg-white btn-supercell p-2 m-1">{{ POTW?.name }}</button>
                    <p><strong>Fame:</strong> {{ POTW?.fame }}</p>
                </Card>
            </CardGrid>
        </div>
    </div>
</template>

<script>
import Card from './common/Card.vue';
import CardGrid from './common/CardGrid.vue';
import SpecialCard from './common/SpecialCard.vue';
import WoodBanner from './common/WoodBanner.vue';

export default {
    name: 'HallOfFame',
    components: { 
        Card, 
        WoodBanner, 
        CardGrid,
        SpecialCard,
    },
    props: { 
        mostGivingPlayer: {
            Type: Object, 
            required: true
        },
        POTS: {
            Type: Object, 
            required: true
        },
        POTW: {
            Type: Object, 
            required: true
        } 
    },
}
</script>

<style>
img {
    width: auto;
    height: 6rem;
}

.gigant-text{
    font-size: 2rem;
}

.bg-yellow {
    background-color: #ffd152;
    color: black;
}
</style>