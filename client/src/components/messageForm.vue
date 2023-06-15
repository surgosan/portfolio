<template>
    <main>
        <h3 class="title">Message Form</h3>
        <label for="fName">First Name</label>
        <input id="fName" type="text" maxlength="100" required>
        <label for="date" required>Date</label>
        <input id="date" type="date"/>
        <label for="message" required>Message</label>
        <textarea id="message" type="text"/>
        <button class="dialog-button" id="submit">Submit</button>
    </main>
</template>

<style scoped>
    main {
        width: 25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    label {
        align-self: flex-start;
        text-decoration: solid underline;
    }

    input, textarea {
        width: 100%;
        line-height: 1.5rem;
        background: var(--color-background-mute);
        border: solid 1px var(--color-heading);
        border-radius: .5rem;
        color: var(--color-text);
        padding-left: .5rem;
        padding-right: .5rem;
        resize: none;
    }

    textarea {
        height: 10rem;
    }

    .title {
        text-decoration: solid underline;
    }

    #submit {
        width: 5rem;
        margin-top: .5rem;
        align-self: flex-end;
    }
</style>

<script setup>

</script>