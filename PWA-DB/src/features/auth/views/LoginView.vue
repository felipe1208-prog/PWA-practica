<script setup>
import InputComponent from "../../../components/InputComponent.vue";
import BotonComponent from "../../../components/BotonComponent.vue";
import { onMounted, ref } from "vue";
import { useAuthStore } from "../../../stores/auth.js";
import { useRouter } from "vue-router";
import api from "../../../api/axios.js";

const router = useRouter();
const authStore = useAuthStore();
const usuario = ref("");
const password = ref("");
const mensajeError = ref("");
const empresas = ref([]);
const cci = ref("");
const nombreEmpresa = ref("");

const procesarLogin = async () => {
    mensajeError.value = "";
    console.log("Datos capturados:", cci.value, usuario.value, password.value);

    try {
        const response = await authStore.login(
            cci.value,
            usuario.value,
            password.value,
        );
        // console.log(respone);
    } catch (error) {
        console.error(error);
    }
};

const recibirEmpresas = async () => {
    try {
        const response = await api.get("/auth/empresa");
        empresas.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    recibirEmpresas();
});
</script>

<template>
    <div class="main-container">
        <form class="formulario" @submit.prevent="procesarLogin">
            <img src="/image-192x192.png" alt="" />
            <!-- <div class="titulo">
                <h1 class="label">Bienvenido</h1>
            </div> -->
            <div class="inputs">
                <select v-model="cci" class="select">
                    <option value="" class="opciones" disabled>
                        Empresa...
                    </option>
                    <option
                        :value="empresa.cci"
                        v-for="empresa in empresas"
                        :key="empresa.cci"
                    >
                        {{ empresa.del }}
                    </option>
                </select>
            </div>
            <div class="inputs">
                <!-- <h4 class="subtitulo">Usuario</h4> -->
                <InputComponent
                    v-model="usuario"
                    tipo="text"
                    placeholder="Usuario..."
                />
            </div>
            <div class="inputs">
                <!-- <h4 class="subtitulo">Contraseña</h4> -->
                <InputComponent
                    v-model="password"
                    tipo="password"
                    placeholder="Contraseña..."
                />
            </div>
            <div class="btn">
                <BotonComponent texto="Iniciar Sesión" />
            </div>
        </form>
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
    color: var(--rojo-db);
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.164);
}

.inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;
}

.select {
    font-family: var(--descripcion);
    padding: 0.5rem;
    padding-right: 2.5rem;
    font-size: 15px;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    height: 40px;
    width: 200px;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

@media (min-width: 384px) {
    .select {
        width: 250px;
        height: 50px;
        font-size: 17px;
    }
}

.opciones {
    color: gray;
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
