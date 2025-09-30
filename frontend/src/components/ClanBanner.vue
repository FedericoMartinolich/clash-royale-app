<template>
<div class="banner">
    <h1>{{ clan.name }}</h1>
    <h6 class="card-subtitle mb-2">
        Clan Tag: {{ clan.tag }}
    </h6>
</div>
</template>

<script>
export default {
  name: "ClanBanner",
  props: { clan: { type: Object, required: true}},
};
</script>