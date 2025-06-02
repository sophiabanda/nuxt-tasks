<script lang="ts" setup>
    const { data, error, status } = await useFetch("/api/tasks", {
        lazy: true,
    });
</script>

<template>
    <div>
        <article v-if="status === 'pending'" aria-busy="true" />
        <article class="error" v-else-if="error">
            {{ error.statusMessage }}
        </article>
        <div v-else>
            <article v-for="task in data" :key="task.id">
                {{ task.title }}
            </article>
        </div>
    </div>
</template>

<!-- aria-busy: true is available in vue in order to create a loading element -->
