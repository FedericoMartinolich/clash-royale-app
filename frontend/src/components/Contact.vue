<template>
    <div class="background-simple">
        <div class="supercell-container">
            <WoodBanner :texto="'Contacto'" />

            <div class="emote-slot align-items-center justify-content mt-4 p-3">
                <div class="card-body text-black">
                    <h2 class="card-title mt-4">¡Quiero Unirme!</h2>
                    <h5 class="card-subtitle mb-4 text-muted">Envianos un mensaje</h5>

                    <!-- WhatsApp -->
                    <a href="https://chat.whatsapp.com/HiJA7g7SefvCXfl1vihH9g" target="_blank" class="m-2">
                        <svg class="icon-whatsapp">
                            <use xlink:href="#whatsapp"></use>
                        </svg>
                    </a>

                    <!-- Instagram -->
                    <a href="https://www.instagram.com/twincrowns.cr/" target="_blank" class="m-2">
                        <svg class="icon-instagram">
                            <use xlink:href="#instagram"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import WoodBanner from './common/WoodBanner.vue';

export default {
    name: 'contact',
    components: { WoodBanner },
}
</script>
<style>
.background-simple {
    background: #dfecff;
    background: radial-gradient(circle, rgb(223, 236, 255) 0, rgb(197, 217, 249) 78%, rgb(171, 199, 244) 100%);
    background-size: cover;
    min-height: 100vh;
    padding: 2rem 0;
}
.icon-whatsapp {
    width: 3.5rem;      /* equivale a w-8 */
    height: 3.5rem;     /* equivale a h-8 */
    border-radius: 50%;
    padding: 0.5rem;
    background-color: #22c55e;
}
.icon-instagram {
    width: 3.5rem;      /* equivale a w-8 */
    height: 3.5rem;     /* equivale a h-8 */
    border-radius: 50%;
    padding: 0.5rem;
    background: linear-gradient(45deg, #feda75 0%, #fa7e1e 50%, #d62976 75%, #962fbf 100%);
}
</style>