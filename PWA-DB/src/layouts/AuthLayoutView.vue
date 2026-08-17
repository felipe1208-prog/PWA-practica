<template>
    <div class="container">
        <main class="contenido">
            <router-view />
        </main>
        <footer class="footer">
            <div class="slogan">
                <p>Disbattery Lubricantes S.A. J-41310543-8</p>
                <p>Todos los derechos reservados ®</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.contenido {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.footer {
    display: flex;
    flex-direction: row;
    background-color: var(--rojo-db);
    min-width: 100%;
    padding: 2.4rem;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.712);
}

.slogan {
    display: flex;
    flex-direction: column;
}

.footer p {
    color: white;
    font-family: var(--descripcion);
    text-shadow: 0px 1px 4px black;
    font-size: 15px;
}

@media (max-width: 320px) {
    .footer {
        padding: 2rem;
    }

    .footer p {
        font-size: 13px;
    }
}
</style>
