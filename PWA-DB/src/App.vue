<script setup>
import { pwaInstall } from "@/composables/pwaInstall";

const { esInstalable, instalarPwa } = pwaInstall();
</script>

<template>
    <router-view />
</template>

<style scoped></style>
