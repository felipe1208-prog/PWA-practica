<script setup>
defineProps({
    texto: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <button type="submit" class="btn">{{ texto }}</button>
</template>

<style scoped>
.btn {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--rojo-db);
    color: white;
    border-radius: 5px;
    border: 1px solid var(--rojo-db);
    height: 100%;
    font-family: var(--descripcion);
    font-size: 15px;
    font-weight: bold;
    padding: 0.5rem;
    transition: background-color 0.1s ease;
}

@media (min-width: 384px) {
    .btn {
        font-size: 18px;
    }
}

.btn:active {
    background-color: var(--naranja-db);
    border: 1px solid var(--naranja-db);
}
</style>
