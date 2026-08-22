<script setup>
import { ref } from "vue";
import { accesos } from "../mocks/mockModulos";

const accesosRapidos = ref(accesos);
</script>

<template>
    <div class="accesos-container">
        <div class="header-accesos">
            <h3 class="subtitulo">Accesos Rápidos</h3>
            <svg
                class="btn-tuerca"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle cx="12" cy="12" r="3"></circle>
                <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                ></path>
            </svg>
        </div>
        <div class="grilla-8">
            <div
                class="cuadro-acceso"
                v-for="item in accesosRapidos"
                :key="item.posicion"
            >
                <template v-if="item.modulo">
                    <div class="btn-neumorfico">
                        <span class="icono" v-html="item.modulo.icono"></span>
                    </div>
                    <span class="nombre">{{ item.modulo.nombre }}</span>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
.accesos-container {
    width: 100%;
    padding: 1rem 0 1rem 0;
    box-sizing: border-box;
}

.header-accesos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.subtitulo {
    font-family: var(--subtitulos);
    font-size: 15px;
}

.btn-tuerca {
    background: none;
    border: none;
    color: #9ca3af77;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;
}

.btn-tuerca:active {
    color: #4b5563;
    transform: rotate(45deg);
}

.grilla-8 {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
}

.cuadro-acceso {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    min-width: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.btn-neumorfico {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    background-color: var(--fondo-neumorfico);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:
        4px 4px 8px rgba(174, 174, 192, 0.4),
        -4px -4px 8px #ffffff;
    flex-shrink: 0;
    transition: all 0.2s ease;
}

.cuadro-acceso:active .btn-neumorfico:not(.vacio) {
    box-shadow:
        inset 4px 4px 8px rgba(174, 174, 192, 0.4),
        inset -4px -4px 8px #ffffff;
    transform: scale(0.95);
}

.icono {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
}

.nombre {
    font-family: var(--descripcion);
    font-size: 10px;
    font-weight: 500;
    color: #6b7280;
    text-align: center;
    white-space: nowrap;
    width: 100%;
    display: block;
    padding-top: 5px;
}

.transparente {
    opacity: 0;
}

@media (min-width: 375px) {
    .btn-neumorfico {
        width: 55px;
        height: 55px;
        border-radius: 16px;
    }
    .nombre {
        font-size: 12px;
    }
}
</style>
