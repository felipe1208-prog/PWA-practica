//Esta funcion es la que saca el overlay de busqueda
import { ref } from "vue";

const buscadorAbierto = ref(false);

export function useBuscador() {
    const abrirBuscador = () => {
        buscadorAbierto.value = true;
    };

    const cerraBuscador = () => {
        buscadorAbierto.value = false;
    };

    return {
        buscadorAbierto,
        abrirBuscador,
        cerraBuscador,
    };
}
