<script setup>
import { RouterView, RouterLink, useRouter, useRoute } from "vue-router";
import { pwaInstall } from "../composables/pwaInstall";
import BadgeSyncComponent from "../components/BadgeSyncComponent.vue";

const { esInstalable, instalarPwa } = pwaInstall();

const router = useRouter();
const route = useRoute();

const navegar = (nombreRuta) => {
    router.push({ name: nombreRuta });
};
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
        <nav class="nav-inferior">
            <ul class="nav-links">
                <div class="nav-medio">
                    <li
                        class="nav-item"
                        :class="{ active: route.name === 'home' }"
                        @click="navegar('home')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                            ></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </li>
                    <li
                        class="nav-item"
                        :class="{ active: route.name === 'busqueda' }"
                        @click="navegar('busqueda')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </li>
                    <li
                        class="nav-item"
                        :class="{ active: route.name === 'actions' }"
                        @click="navegar('actions')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </li>
                    <li
                        class="nav-item"
                        :class="{ active: route.name === 'sync' }"
                        @click="navegar('sync')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M21 2v6h-6"></path>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                            <path d="M3 22v-6h6"></path>
                            <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                        </svg>
                    </li>
                    <li
                        class="nav-item"
                        :class="{ active: route.name === 'perfil' }"
                        @click="navegar('perfil')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                            ></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </li>
                </div>
            </ul>
        </nav>
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

.nav-inferior {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    z-index: 100;
    margin-bottom: 20px;
}

.nav-medio {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 17px;
    padding: 0 10px;
    box-shadow:
        inset 4px 4px 8px rgba(174, 174, 192, 0.5),
        inset -4px -4px 8px #ffffff;
}

.nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    box-shadow:
        -4px -4px 8px #ffffff,
        4px 4px 8px rgba(174, 174, 192, 0.5);
    width: 90%;
    border-radius: 20px;
    background-color: var(--fondo-neumorfico);
    padding: 5px;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    box-shadow: none;
    background-color: none;
    color: #9ca3af;
    transition: all 0.3s ease;
}

.nav-item.active {
    color: var(--rojo-db, #d32f2f);
    background-color: #ffffff;
    box-shadow:
        4px 4px 8px rgba(174, 174, 192, 0.5),
        -4px -4px 8px #ffffff;
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
