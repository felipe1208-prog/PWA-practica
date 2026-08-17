<script setup>
import { ref, computed } from "vue";

const modelo = defineModel();

const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    tipo: {
        type: String,
        default: "text",
    },
});

const mostrarPassword = ref(false);

const tipoDinamico = computed(() => {
    if (props.tipo === "password") {
        return mostrarPassword.value ? "text" : "password";
    }
    return props.tipo;
});

const alternarVisibilidad = () => {
    mostrarPassword.value = !mostrarPassword.value;
};
</script>

<template>
    <div class="input-wrapper">
        <input
            v-model="modelo"
            class="input"
            :type="tipoDinamico"
            :placeholder="placeholder"
        />
        <button
            v-if="tipo === 'password'"
            type="button"
            class="btn-toggle"
            @click="alternarVisibilidad"
            aria-label="Alternar visibilidad"
        >
            <svg
                v-if="!mostrarPassword"
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
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <svg
                v-else
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
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>
                <line x1="2" y1="2" x2="22" y2="22"></line>
            </svg>
        </button>
    </div>
</template>

<style scoped>
.input-wrapper {
    position: relative;
    width: 100%;
    max-width: 200px;
}

.input {
    font-family: var(--descripcion);
    padding: 0.5rem;
    padding-right: 2.5rem;
    font-size: 15px;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.input:focus {
    outline: none;
    border-width: 2px;
}

.btn-toggle {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.btn-toggle:hover {
    opacity: 0.7;
}

.input::-ms-reveal,
.input::-ms-clear {
    display: none;
}

.input::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
}

@media (min-width: 384px) {
    .input-wrapper {
        max-width: 250px;
    }
    .input {
        height: 50px;
        font-size: 17px;
    }
}
</style>
