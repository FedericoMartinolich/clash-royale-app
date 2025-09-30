<template>
<div class="SpecialCard">
    <div class="Shining"></div>
    <div class="Content">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    name: "SpecialCard",
};

</script>

<style>
    .SpecialCard {
        overflow: hidden;
        position: relative;
        z-index: 1;
        background: linear-gradient(to bottom right, #bc2564, #ca39ca);
        border: 4px solid rgb(78, 6, 78);
        border-radius: 12px;
        width: auto;
        height: auto;
        margin: 0 auto;
        box-shadow: 0 4px 15px rgb(49, 2, 44);
        text-align: center;
        padding: 60px;
    }

    .Shining {
        position: absolute;
        top: -75%;
        left: -75%;
        width: 250%;
        height: 250%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        animation: spin 10s linear infinite;
        opacity: 0.4; /* ajusta intensidad del reflejo */
        pointer-events: none;
        z-index: 2; /* asegúrate de que esté encima del fondo pero debajo del contenido */
        background-image: url('../../assets/imgs/items/sun-rays-white.webp');
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .Content {
        position: relative;
        z-index: 3;
        color: white;
        padding: 20px;
        text-align: center;
    }
</style>