<script setup>
import InputComponent from "../../../components/InputComponent.vue";
import BotonComponent from "../../../components/BotonComponent.vue";
</script>

<template>
    <div class="main-container">
        <div class="formulario">
            <img src="../../../../public/image-192x192.png" alt="" />
            <div class="titulo">
                <h1 class="label">Bienvenido</h1>
            </div>
            <div class="inputs">
                <h4 class="subtitulo">Usuario</h4>
                <InputComponent tipo="text" placeholder="User123..." />
            </div>
            <div class="inputs">
                <h4 class="subtitulo">Contraseña</h4>
                <InputComponent
                    tipo="password"
                    placeholder="Disbattery456..."
                />
            </div>
            <div class="btn">
                <BotonComponent texto="Iniciar Sesión" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
}

.formulario {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.411);
    border-radius: 10px;
    padding: 1rem;
    gap: 1rem;
    align-items: center;
}

img {
    height: 100px;
}

.titulo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.label {
    font-size: 35px;
    font-family: var(--titulos);
    font-weight: bold;
    color: var(--azul-db);
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.164);
}

.inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;
}

.subtitulo {
    font-family: var(--subtitulos);
    font-weight: 500;
}

.btn {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 3rem;
}
</style>
