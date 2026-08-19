<script setup>
import { defineModel, defineProps, useSlots } from "vue";

const modelo = defineModel();

const props = defineProps({
    placeholder: {
        type: String,
        default: "Buscar...",
    },
});

const slots = useSlots();
</script>

<template>
    <div class="input-wrapper">
        <input
            v-model="modelo"
            class="input"
            :class="{ 'con-icono': slots.icono }"
            type="text"
            :placeholder="placeholder"
        />

        <div v-if="slots.icono" class="icono-contenedor">
            <slot name="icono"></slot>
        </div>
    </div>
</template>

<style scoped>
.input-wrapper {
    position: relative;
    width: 100%;
}

.input {
    font-family: var(--descripcion, sans-serif);
    padding: 0.5rem 1rem;
    font-size: 15px;
    width: 100%;
    height: 40px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    background-color: var(--fondo-neumorfico, #f0f0f3);
    border: none;
    outline: none;
    border-radius: 12px;
    box-shadow:
        inset 4px 4px 8px rgba(174, 174, 192, 0.4),
        inset -4px -4px 8px #ffffff;
    color: #4b5563;
}

.input.con-icono {
    padding-left: 2.5rem;
}

.icono-contenedor {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
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

@media (min-width: 375px) {
    .input {
        height: 45px;
        font-size: 16px;
        border-radius: 14px;
    }
}

@media (min-width: 384px) {
    .input {
        height: 50px;
        font-size: 17px;
        border-radius: 15px;
    }
}
</style>
