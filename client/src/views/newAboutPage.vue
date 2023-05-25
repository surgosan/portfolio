<template>
    <main>
        <RouterLink to="/" class="link">Return</RouterLink>
        <div class="content">
            <div class="hBox">
                <div class="selection">
                    
                </div>
            </div>

            <div class="tools">
                <!-- Place my tool, langs, and ides' here -->
            </div>
        </div>
    </main>
</template>

<style scoped>

    main {
        flex-grow: 1;
        height: 100dvh;
        display: flex;
        flex-direction: column;
    }
    .content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .hBox {
        border: solid 2px green;
        height: 85%;
    }

    .tools {
        flex-grow: 1;
        border: solid 2px yellow;
    }
</style>

<script setup>
    
</script>