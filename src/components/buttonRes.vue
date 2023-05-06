<template>
    <a :href="location">{{ buttonLabel }}</a>
</template>

<script>
    export default {
        props: {
            buttonLabel: String,
            location: String
        }
    }
</script>

<style scoped>
    a {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 135px;
        aspect-ratio: 3/1;
        border: solid 1px var(--color-heading);
        border-radius: 5px;
        background-color: var(--color-background-mute);
        color: var(--color-heading);
        text-decoration: none;
        transition: .4s;
    }

    a:hover {
        border: solid 1.5px var(--color-theme);
        background-color: var(--color-background-soft);
    }
</style>