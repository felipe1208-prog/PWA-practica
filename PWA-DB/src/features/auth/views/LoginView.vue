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
const estaCargando = ref(false);

const procesarLogin = async () => {
    mensajeError.value = "";

    try {
        const response = await authStore.login(
            cci.value,
            usuario.value,
            password.value,
        );
        console.log(
            "Datos capturados:",
            cci.value,
            usuario.value,
            password.value,
        );
        estaCargando.value = true;
        router.push({ name: "home" });
    } catch (error) {
        console.error(error);
    } finally {
        estaCargando.value = false;
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
                <button
                    class="btn"
                    :disabled="estaCargando"
                    @click="procesarLogin"
                    type="submit"
                >
                    Iniciar Sesión
                </button>
            </div>
            <p class="texto-bajo">¿Olvidaste tu contraseña?</p>
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
    background-color: #f0f0f3;
    box-shadow:
        10px 10px 20px var(--sombra-oscura),
        -10px -10px 20px var(--sombra-clara);
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

.select {
    font-family: var(--descripcion);
    font-size: 15px;
    max-width: 100%;
    width: 200px;
    height: 40px;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    box-sizing: border-box;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: var(--fondo-neumorfico, #f0f0f3);
    border: none;
    outline: none;
    border-radius: 12px;
    color: #4b5563;
    box-shadow:
        inset 4px 4px 8px rgba(174, 174, 192, 0.4),
        inset -4px -4px 8px #ffffff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 18px;
}

.select:focus {
    box-shadow:
        inset 6px 6px 12px rgba(174, 174, 192, 0.5),
        inset -6px -6px 12px #ffffff;
}

.select option {
    background-color: white;
    color: #333333;
    padding: 10px;
}

.select option:disabled {
    color: #9ca3af;
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

.texto-bajo {
    font-family: var(--descripcion);
    font-size: 12px;
    text-decoration: underline;
    margin-top: 0.5rem;
}

.texto-bajo:active {
    color: var(--rojo-db);
}

@media (min-width: 375px) {
    .select {
        width: 225px;
        height: 45px;
        font-size: 16px;
    }

    .texto-bajo {
        font-size: 14px;
    }

    .btn {
        font-size: 17px;
    }
}

@media (min-width: 384px) {
    .select {
        width: 250px;
        height: 50px;
        font-size: 17px;
    }

    .texto-bajo {
        font-size: 15px;
    }

    .btn {
        font-size: 18px;
    }
}
</style>
