<template>
    <a class="container" :href="file" target="_blank">
        <h1>{{ title }}</h1>
    </a>
</template>

<style scoped>
    .container {
        width: 75%;
        aspect-ratio: 3/1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 1%;
        border: solid 2px var(--color-heading);
        border-radius: 10px;
        color: white;
        background-size: cover;
        background-position: 0 25%;
        background-repeat: no-repeat;
        transition: .4s;
    }

    .container:hover {
        border: solid 2px var(--color-theme);
    }

    h1 {
        text-shadow: 0 3px 3px black;
    }
</style>

<script >
    export default{
        props: {
            title: String,
            file: String,
        }
    }
</script>