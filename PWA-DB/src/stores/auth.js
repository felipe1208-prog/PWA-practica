import { defineStore } from "pinia";
import api from "../api/axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        estaAutenticado: false,
        cargandoSesion: true,
        usuario: null, //aqui van los detalles del usuario
    }),

    actions: {
        async login(user, password) {
            const respuesta = await api.post("/auth/login", { user, password });
            this.estaAutenticado = true;
            this.usuario = respuesta.data;
        },
    },
});
