import { ref } from "vue";

export const mockCatalogo = [
    {
        categoria: "Ventas",
        modulos: [
            { id: 1, nombre: "Ventas", icono: "🛒", ruta: "/ventas" },
            { id: 2, nombre: "Facturación", icono: "🧾", ruta: "/facturacion" },
        ],
    },
    {
        categoria: "Consultas",
        modulos: [
            {
                id: 3,
                nombre: "Productos",
                icono: "📦",
                ruta: "/consultas/productos",
            },
            {
                id: 4,
                nombre: "Clientes",
                icono: "👥",
                ruta: "/consultas/clientes",
            },
            {
                id: 5,
                nombre: "Pedidos",
                icono: "📋",
                ruta: "/consultas/pedidos",
            },
        ],
    },
    {
        categoria: "Pagos",
        modulos: [
            { id: 6, nombre: "Crear Pago", icono: "💳", ruta: "/pagos/crear" },
            {
                id: 7,
                nombre: "Pagos Procesados",
                icono: "✅",
                ruta: "/pagos/procesados",
            },
            {
                id: 8,
                nombre: "Pagos Pendientes",
                icono: "⏳",
                ruta: "/pagos/pendientes",
            },
        ],
    },
    {
        categoria: "Soporte",
        modulos: [
            { id: 9, nombre: "Ayuda", icono: "🎧", ruta: "/ayuda" },
            { id: 10, nombre: "Configuración", icono: "⚙️", ruta: "/config" },
        ],
    },
];

export const accesos = ref([
    {
        posicion: 1,
        modulo: {
            id: 1,
            nombre: "Ventas",
            icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
            ruta: "/ventas",
        },
    },
    {
        posicion: 2,
        modulo: {
            id: 3,
            nombre: "Productos",
            icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
            ruta: "/consultas/productos",
        },
    },
    {
        posicion: 3,
        modulo: {
            id: 4,
            nombre: "Clientes",
            icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
            ruta: "/consultas/clientes",
        },
    },
    {
        posicion: 4,
        modulo: {
            id: 6,
            nombre: "Crear Pago",
            icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
            ruta: "/pagos/crear",
        },
    },
    {
        posicion: 5,
        modulo: {
            id: 2,
            nombre: "Facturación",
            icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
            ruta: "/facturacion",
        },
    },
    { posicion: 6, modulo: null },
    { posicion: 7, modulo: null },
    { posicion: 8, modulo: null },
]);
