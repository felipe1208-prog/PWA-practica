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
    min-height: 100dvh;
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
    min-width: 100%;
    padding: 2.4rem;
    justify-content: center;
    align-items: center;
}

.slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer p {
    color: gray;
    font-family: var(--descripcion);
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
