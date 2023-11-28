<template>
    <div class="container">
        <a :href="section.spotify" target="_blank">Spotify</a>
        <a :href="section.youtube" target="_blank">Youtube</a>
    </div>
</template>

<script setup lang="ts">
defineProps(['section']);
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.container>a {
    margin-right: 10px;
}
</style>