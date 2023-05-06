<template>
    <div class="row-items">
        <h1>A little about me.</h1>
        <descriptionCard msg="My name is Sergio Sanchez-Alvares. I live in Georgia, USA where I attend Dalton State College. 
            I enjoy programming, music, photography, and motorcycles."/>
    </div>

</template>

<script>
    import descriptionCard from './descriptionCard.vue';
    
    export default {
        components: {
            descriptionCard
        }
    }
</script>

<style scoped>
</style>