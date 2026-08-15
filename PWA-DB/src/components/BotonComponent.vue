<script setup>
defineProps({
    texto: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <button class="btn">{{ texto }}</button>
</template>

<style scoped>
.btn {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--azul-db);
    color: white;
    border-radius: 5px;
    border: 1px solid var(--azul-db);
    height: 100%;
    font-family: var(--descripcion);
    font-size: 15px;
    font-weight: bold;
    padding: 0.5rem;
    transition: background-color 0.3s ease;
}

@media (min-width: 384px) {
    .btn {
        font-size: 18px;
    }
}

.btn:active {
    background-color: #1900fd;
    border: 1px solid #1900fd;
}
</style>
