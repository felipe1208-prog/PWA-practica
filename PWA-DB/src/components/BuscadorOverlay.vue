<script setup>
import { ref, onMounted } from "vue";
import { useBuscador } from "../composables/useBuscador";
import SearchInputComponent from "./SearchInputComponent.vue";

const { cerrarBuscador } = useBuscador();
const textoReal = ref("");

const inputRef = ref(null);

onMounted(() => {
    setTimeout(() => {
        if (inputRef.value) {
            inputRef.value.$el.querySelector("input").focus();
        }
    }, 100);
});
</script>

<template>
    <div class="overlay-pantalla">
        <header class="overlay-header">
            <button class="btn-back" @click="cerrarBuscador">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>
            <SearchInputComponent
                ref="inputRef"
                v-model="textoReal"
                placeholder="¿Qué producto necesitas?..."
            />
        </header>

        <main class="overlay-resultados"></main>
    </div>
</template>

<style scoped>
.overlay-pantalla {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: var(--fondo-neumorfico);
    z-index: 90;
    display: flex;
    flex-direction: column;
}

.overlay-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 1rem;
    height: 70px;
}

.btn-back {
    background: none;
    border: none;
    color: var(--rojo-db, #d32f2f);
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay-resultados {
    flex-grow: 1;
    padding: 1rem;
    overflow-y: auto;
    padding-bottom: 110px;
}
</style>
