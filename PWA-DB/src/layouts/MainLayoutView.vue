<script setup>
import { RouterView, RouterLink } from "vue-router";
import { pwaInstall } from "../composables/pwaInstall";
import BadgeSyncComponent from "../components/BadgeSyncComponent.vue";

const { esInstalable, instalarPwa } = pwaInstall();
</script>

<template>
    <div class="app-container">
        <div class="pwa-banner" v-if="esInstalable">
            <span class="pwa-texto"
                >Instala la app para una mejor experiencia</span
            >
            <button class="pwa-btn" @click="instalarPwa">Instalar</button>
        </div>
        <!--Area desplazable de la app-->
        <div class="area-desplazable">
            <header class="header">
                <div class="izq">
                    <input id="checkbox" type="checkbox" />
                    <label class="toggle" for="checkbox">
                        <div class="grupo-lineas">
                            <div id="bar1" class="bars"></div>
                            <div id="bar2" class="bars"></div>
                            <div id="bar3" class="bars"></div>
                        </div>
                    </label>
                    <img src="/public/logo-grande.png" alt="" class="logo-db" />
                </div>
                <div class="derecha">
                    <BadgeSyncComponent :cantidad="0" />
                </div>
            </header>

            <main class="main-container">
                <router-view></router-view>
            </main>
        </div>

        <!--Area fija (nav)-->
        <nav class="nav-inferior"></nav>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
}

.izq {
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem;
    padding-left: 1rem;
    align-items: center;
}

.derecha {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem;
    padding-right: 1rem;
}

#checkbox {
    display: none;
}

.grupo-lineas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
    transform: scale(0.8);
}

.toggle {
    position: relative;
    width: 35px;
    height: 35px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;
    background-color: var(--fondo-neumorfico, #f0f0f3);
    border-radius: 12px;
    box-shadow:
        4px 4px 8px rgba(174, 174, 192, 0.4),
        -4px -4px 8px #ffffff;
}

.toggle:active {
    box-shadow:
        inset 4px 4px 8px rgba(174, 174, 192, 0.4),
        inset -4px -4px 8px #ffffff;
}

.bars {
    width: 25px;
    height: 3px;
    background-color: var(--rojo-db);
    border-radius: 5px;
    transition-duration: 0.3s;
    flex-shrink: 0;
    transform: translateZ(0);
}

#checkbox:checked + .toggle #bar1 {
    transform: translateY(11px) rotate(-30deg);
    transform-origin: left center;
    transition-duration: 0.3s;
}

#checkbox:checked + .toggle #bar2 {
    transform: translateX(9px) rotate(90deg);
    transition-duration: 0.3s;
}

#checkbox:checked + .toggle #bar3 {
    transform: translateY(-11px) rotate(30deg);
    transform-origin: left center;
    transition-duration: 0.3s;
}

.logo-db {
    width: 160px;
    height: 50px;
}

.pwa-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--rojo-db, #d32f2f);
    padding: 0.4rem 1rem;
    z-index: 200;
}

.pwa-texto {
    color: #ffffff;
    font-family: var(--descripcion, sans-serif);
    font-size: 12px;
    font-weight: 500;
}

.pwa-btn {
    background-color: #ffffff;
    color: var(--rojo-db, #d32f2f);
    border: none;
    border-radius: 12px;
    padding: 0.3rem 0.8rem;
    font-family: var(--titulos, sans-serif);
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    -webkit-tap-highlight-color: transparent;
}

.pwa-btn:active {
    transform: scale(0.95);
}

@media (min-width: 375px) {
    .logo-db {
        width: 180px;
        height: 55px;
    }

    .toggle {
        transform: scale(1.1);
    }

    .toggle:active {
        transform: scale(1.1);
        box-shadow:
            inset 4px 4px 8px rgba(174, 174, 192, 0.4),
            inset -4px -4px 8px #ffffff;
    }
}

@media (min-width: 384px) {
    .logo-db {
        width: 200px;
        height: 60px;
    }

    .toggle {
        transform: scale(1.2);
    }

    .toggle:active {
        transform: scale(1.2);
        box-shadow:
            inset 4px 4px 8px rgba(174, 174, 192, 0.4),
            inset -4px -4px 8px #ffffff;
    }
}

/* REGLA DE SEGURIDAD MÁXIMA */
/* Si el navegador detecta que la app ya se abrió instalada, oculta el banner forzosamente */
@media all and (display-mode: standalone) {
    .pwa-banner {
        display: none !important;
    }
}
</style>
