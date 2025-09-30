<template>
    <div class="emote-slot mt-4 p-3">
        <div class="card-body">
          <p class="card-text">Description: {{ clan.description }}</p>
          <p class="card-text">Members: {{ clan.members }} / 50</p>
          <p class="card-text">Clan Score: {{ clan.clanScore }}</p>
          <p class="card-text">
            Clan War Trophies: {{ clan.clanWarTrophies }}
          </p>
          <p class="card-text">
            Location: {{ clan.location.name }} ({{ clan.location.isCountry ?
            'Country' : 'Global' }})
          </p>
          <p class="card-text">
            Type: {{ clan.type }} | Required Trophies: {{
            clan.requiredTrophies }}
          </p>
        </div>
      </div>
</template>
<script>
export default {
    name: 'ClanInfo',
    props: { clan: { type: Object, required: true } },
}
</script>