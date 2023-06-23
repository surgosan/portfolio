<template>
    <main>
        <h3 class="title">Suggestion Form</h3>
        <p>*Inappropriate suggestions will be deleted*</p>
        <label for="fName">First Name</label>
        <input id="fName" type="text" v-model="firstName" maxlength="100">
        <label for="message">Message</label>
        <textarea id="message" type="text" v-model="message"/>
        <button class="dialog-button" id="submit" @click="sendMessage">Submit</button>
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
    import { ref } from 'vue';
    import Connection from '@/server/Connection';
    import { useStore } from 'vuex';

    const store = useStore();

    const firstName = ref('');
    const message = ref('');

    const sendMessage = async () => {
        var date = new Date();
        var formattedDate = date.toLocaleDateString('en-US'); 

        if(!verify()) {
            createNotification("Fill in all Fields")
            return;
        }

        const messageData = {
            date: formattedDate,
            first_name: firstName.value,
            message: message.value
        }

        try {
            const response = await Connection.newSuggestion(messageData);
            
            createNotification(response.data);
        } catch {
            createNotification("Error sending a message");
        }
        
    }

    const verify = () => {
        const refArray = [firstName.value, message.value];
        return refArray.every(value => value.trim().length > 0);
    }

    const createNotification = (message) => {
    const notification = {
      id: new Date().getTime(), // Unique identifier for the notification
      message: message,
    };

    store.commit('addNotification', notification);

    removeExpiredNotifications();
  };

  const removeExpiredNotifications = () => {
    setTimeout(() => {
      store.commit('removeOldestNotification');
    }, 10000);
  };
</script>