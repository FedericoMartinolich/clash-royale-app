<template>
<div>
  <div class="text-outline">
    <h5>Description: {{ clan.description }}</h5>
    <h5>Members: {{ clan.members }} / 50</h5>
    <h5>Clan War Trophies: {{ clan.clanWarTrophies }}</h5>
    <h5>
      Location: {{ clan.location.name }} ({{ clan.location.isCountry ?
      'Country' : 'Global' }})
    </h5>
    <h5>Type: {{ clan.type }}</h5>
    <h5>Required Trophies: {{ clan.requiredTrophies }}</h5>
  </div>
</div>
</template>

<script>
export default {
    name: 'ClanInfo',
    props: { clan: { type: Object, required: true } },
}
</script>
<style scoped>

</style>