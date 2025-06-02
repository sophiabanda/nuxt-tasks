<template>
    <div>
        <AppNavbar />
        <main class="container">
            <slot />
        </main>
    </div>
</template>

<style>
    .error {
        color: red;
    }
</style>
