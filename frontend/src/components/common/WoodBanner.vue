<template>
    <div class="headerContainer mt-3">
        <div class="imageContainer mt-3">
            <img src="../../assets/imgs/banners/wood-banner.png" alt="">
            <h1 class="headerText text-supercell">{{ texto }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WoodBanner',
    props: { texto: {Type: String, required: true} },
}
</script>