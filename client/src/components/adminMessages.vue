<template>
    <main>
        <div class="hBox">
            <div class="display-table">
                <h2 class="section-title">Messages List</h2>
                <div class="search">
                    <label id="nameLabel2" for="searchName">Search By Name:</label>
                    <input id="nameInput2" type="text" v-model="nameInput" @keyup.enter="searchMessages"/>
                    <button id="searchFor2" @click="searchMessages">Search</button>
                    <button id="clear_button2" @click="reset">Clear</button>
                </div>
                <div class="table">
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>First Name</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="message in messageList" :key="messageList.id">
                            <td>{{ message.id }}</td>
                            <td>{{ message.date }}</td>
                            <td>{{ message.first_name }}</td>
                            <td>{{ message.message }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
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

    .search {
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
    }

    #nameLabel2 {
        text-decoration: none;
    }

    #clear_button2 {
        display: none;
    }

    #nameInput2 {
        width: 15rem;
    }

    .section-title {
        text-decoration: solid underline;
    }

    #submit {
        width: 5rem;
        margin-top: .5rem;
        align-self: flex-end;
    }

    .hBox {
        height: 100%;
        width: 80%;
        align-self: center;
        gap: 5rem;
    }

    .display-table {
        padding: 1rem;
        border: solid 2px var(--color-heading);
        border-radius: 1rem;
        background-color: var(--color-background-soft);
        flex-grow: 1;
        height: 100%;
    }
</style>

<script setup>
    import { ref, onMounted } from 'vue';
    import Connection from '@/server/Connection';
    import { useStore } from 'vuex';

    const store = useStore();

    const messageList = ref([]);
    const nameInput = ref('');
    const searching = ref(false);


    const verify = () => {
        const refArray = [firstName.value, message.value];
        return refArray.every(value => value.trim().length > 0);
    }

    const searchBar = () => {
        searching.value = !searching.value;

        if(searching.value){
            document.getElementById("nameLabel2").style.display = "none";
            document.getElementById("nameInput2").style.display = "none";
            document.getElementById("searchFor2").style.display = "none";
            document.getElementById("clear_button2").style.display = "initial";
        }
        else {
            document.getElementById("nameLabel2").style.display = "initial";
            document.getElementById("nameInput2").style.display = "initial";
            document.getElementById("searchFor2").style.display = "initial";
            document.getElementById("clear_button2").style.display = "none";
        }
    }

    const reset = () => {
        searchBar();
        getMessages();
        nameInput.value = "";
    }

    const getMessages = async () => {
        try {
            const response = await Connection.getAllMessages();
            messageList.value = response.data;
        } catch (error) {
            createNotification("There was an issue loading Messages");
        }
    }

    const searchMessages = async () => {
        if(!nameInput.value.trim().length > 0)
        {
            return;
        }

        try {
            const response = await Connection.getMessageByName({first_name: nameInput.value});
            messageList.value = response.data;
            searchBar();
        } catch {
            createNotification("No Messages found by the name of " + nameInput.value + ".");
        }
    }

    onMounted(getMessages);

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