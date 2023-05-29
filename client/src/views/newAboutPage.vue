<template>
    <main>
        <RouterLink to="/" class="link">Return</RouterLink>
        <div class="content">
            <div class="hBox">
                <div class="selection">
                    <h1>Select a topic</h1>
                    <div class="topics">
                        <div class="topic">
                            <h2>General</h2>
                        </div>

                        <div class="topic">
                            <h2>Hobbies</h2>
                        </div>

                        <div class="topic">
                            <h2>Plans</h2>
                        </div>

                        <div class="topic">
                            <h2>Work Ethic</h2>
                        </div>

                        <div class="topic">
                            <h2>Programming Tools</h2>
                        </div>

                        <div class="topic">
                            <h2>Programming Experience</h2>
                        </div>
                    </div>
                </div>
                <div class="view">
                    <RouterView name="topicView"/>
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

    .selection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid 2px red;
        width: 30%;
        height: 100%;
        gap: .5rem;
    }

    .topics {
        width: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: .8rem;
    }

    .topic {
        position: relative;
        cursor: pointer;
    }

    .topic:hover {
        color: var(--color-heading);
    }

    .topic::before {
        position: absolute;
        bottom: 0;
        right: 50%;
        content: "";
        width: 0%;
        height: 2px;
        background: red;
        transition: .5s;
    }

    .topic::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        content: "";
        width: 0%;
        height: 2px;
        background: var(--color-theme);
        transition: .5s;
    }

    .topic:hover::after, .topic:hover::before {
        width: 50%;
    }

    .view {
        border: solid 2px cyan;
        flex-grow: 1;
        height: 100%;
    }
</style>

<script setup>
    import { RouterView } from 'vue-router';
</script>