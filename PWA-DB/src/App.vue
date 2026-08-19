<script setup>
import { pwaInstall } from "@/composables/pwaInstall";
import { useBuscador } from "./composables/useBuscador.js";
import BuscadorOverlay from "./components/BuscadorOverlay.vue";
import { Transition } from "vue";
import { watch } from "vue";
import { useRoute, RouterView } from "vue-router";

const { buscadorAbierto, abrirBuscador, cerrarBuscador } = useBuscador();
const { esInstalable, instalarPwa } = pwaInstall();

const route = useRoute();

watch(
    () => route.path,
    () => {
        if (buscadorAbierto.value) {
            cerrarBuscador();
        }
    },
);
</script>

<template>
    <router-view />

    <transition name="fade">
        <BuscadorOverlay v-if="buscadorAbierto" />
    </transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
}
</style>
