<script setup>
defineProps({
    texto: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <button :disabled="activo" type="submit" class="btn">{{ texto }}</button>
</template>

<style scoped>
.btn {
    background-color: var(--rojo-db, #d32f2f);
    color: #ffffff;
    font-family: var(--titulos, sans-serif);
    font-size: 16px;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 12px;
    cursor: pointer;
    box-shadow:
        6px 6px 12px rgba(0, 0, 0, 0.25),
        -6px -6px 12px rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
}

.btn:active {
    background-color: var(--naranja-db);
}

@media (min-width: 384px) {
    .btn {
        font-size: 18px;
    }
}
</style>
