import { ref, onMounted, onUnmounted } from "vue";

export function pwaInstall() {
    const eventoInstalacion = ref(null);
    const esInstalable = ref(false);
    const validarInstalacion = (evento) => {
        eventoInstalacion.value = evento;
        esInstalable.value = true;
    };

    const instalarPwa = async () => {
        if (!eventoInstalacion.value) return;

        eventoInstalacion.value.prompt(); //ventana de confirmacion de descarga

        const { outcome } = await eventoInstalacion.value.userChoice;
        console.log(`Usuario escogió: ${outcome}`);

        eventoInstalacion.value = null;
        esInstalable.value = true;
    };

    onMounted(() => {
        window.addEventListener("beforeinstallprompt", validarInstalacion);
    });

    onUnmounted(() => {
        //si quita para no consumir recursos al recargar
        window.removeEventListener("beforeinstallprompt", validarInstalacion);
    });

    return {
        esInstalable,
        instalarPwa,
    };
}
