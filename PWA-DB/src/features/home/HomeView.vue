<script setup>
import SearchInputComponent from "../../components/SearchInputComponent.vue";
</script>

<template>
    <div class="container">
        <SearchInputComponent placeholder="Buscar...">
            <template #icono>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </template>
        </SearchInputComponent>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
}
</style>
