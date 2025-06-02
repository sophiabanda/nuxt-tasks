<template>
    <nav class="container">
        <ul>
            <li>
                <NuxtLink to="/">
                    <strong>Tasks App</strong>
                </NuxtLink>
            </li>
        </ul>
        <ul>
            <li>
                <NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<!-- In order to link to pages you can use Vue's internal "to" (to="/create").
 You can also use object syntax and bind this to say this should go to the 
 route with the name 'create' (:to="{ name: 'create' }") -->
