<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    cantidad: {
        type: Number,
        default: 0,
    },
});

const claseEstado = computed(() => {
    if (props.cantidad === 0) return "estado-sincronizado";
    if (props.cantidad <= 5) return "estado-alerta";
    if (props.cantidad <= 10) return "estado-peligro";
    return "estado-critico";
});
</script>

<template>
    <div class="badge-base">
        <div class="badge-inner" :class="claseEstado">
            <span class="texto-badge" v-if="props.cantidad > 0">
                {{ props.cantidad }}
            </span>

            <svg
                v-if="props.cantidad === 0"
                class="icono-sync"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="20 7.5 9 18.5 4 13.5"></polyline>
            </svg>

            <svg
                v-else
                class="icono-sync"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M21 2v6h-6"></path>
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                <path d="M3 22v-6h6"></path>
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
            </svg>
        </div>
    </div>
</template>

<style scoped>
.badge-base {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    height: 35px;
    min-width: 35px;
    box-sizing: border-box;
    border-radius: 12px;
    background-color: var(--fondo-neumorfico, #f0f0f3);
    box-shadow:
        3px 3px 6px rgba(174, 174, 192, 0.4),
        -3px -3px 6px #ffffff;
}

.badge-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 100%;
    min-width: 27px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 8px;
    transition:
        background-color 0.3s ease,
        color 0.3s ease;
}

.texto-badge {
    font-family: var(--descripcion, sans-serif);
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
    transform: translateY(1px);
}

.icono-sync {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
}

.estado-sincronizado {
    padding: 0;
    width: 27px;
    box-shadow:
        inset 2px 2px 4px rgba(174, 174, 192, 0.4),
        inset -2px -2px 4px #ffffff;
    background-color: transparent;
    color: #9ca3af;
}

.estado-alerta {
    background-color: #facc15;
    color: #714b00;
}

.estado-peligro {
    background-color: #f97316;
    color: #ffffff;
}

.estado-critico {
    background-color: var(--rojo-db, #d32f2f);
    color: #ffffff;
}

@media (min-width: 375px) {
    .badge-base {
        height: 40px;
        min-width: 40px;
    }

    .badge-inner {
        min-width: 32px;
        padding: 0 12px;
        gap: 6px;
    }

    .estado-sincronizado {
        width: 32px;
    }

    .texto-badge {
        font-size: 15px;
    }

    .icono-sync {
        width: 18px;
        height: 18px;
    }
}

@media (min-width: 384px) {
    .badge-base {
        height: 45px;
        min-width: 45px;
    }

    .badge-inner {
        min-width: 37px;
        padding: 0 14px;
        gap: 7px;
    }

    .estado-sincronizado {
        width: 37px;
    }

    .texto-badge {
        font-size: 17px;
    }

    .icono-sync {
        width: 20px;
        height: 20px;
    }
}
</style>
