<template>
    <main>
        <h1 class="section-title">Suggestions</h1>
        <RouterLink to="/" class="link">Return</RouterLink>
        <div class="hBox">
            <div class="newSuggestion">
                <h2 class="section-title">Make a new suggestion!</h2>
                <p>*Inappropriate suggestions will be deleted*</p>
                <label for="fName">First Name</label>
                <input id="fName" type="text" v-model="firstName" maxlength="100">
                <label for="message">Message</label>
                <textarea id="message" type="text" v-model="message"/>
                <button class="dialog-button" id="submit" @click="sendMessage">Submit</button>
            </div>
            <div class="display-table">
                <h2 class="section-title">Suggestions List</h2>
                <div class="search">
                    <label id="nameLabel" for="searchName">Search By Name:</label>
                    <input id="nameInput" type="text" v-model="nameInput" @keyup.enter="searchSuggestions"/>
                    <button id="searchFor" @click="searchSuggestions">Search</button>
                    <button id="clear_button" @click="reset">Clear</button>
                </div>
                <div class="table">
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>First Name</th>
                            <th>Message</th>
                            <th>Fufilled</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="suggestion in suggestionList" :key="suggestionList.id">
                            <td>{{ suggestion.date }}</td>
                            <td>{{ suggestion.first_name }}</td>
                            <td>{{ suggestion.message }}</td>
                            <td>{{ suggestion.fulfilled }}</td>
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
        gap: 5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
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

    #nameLabel {
        text-decoration: none;
    }

    #clear_button {
        display: none;
    }

    #nameInput {
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

    .link {
        position: absolute;
        top: 0;
        left: 0;
    }

    .hBox {
        height: 100%;
        width: 80%;
        align-self: center;
        gap: 5rem;
    }

    .newSuggestion {
        padding: 2rem;
        border: solid 2px var(--color-heading);
        border-radius: 1rem;
        background-color: var(--color-background-soft);
        width: 25%;
        height: fit-content;
        align-self: flex-start;
    }

    .display-table {
        padding: 2rem;
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

    const firstName = ref('');
    const message = ref('');
    const suggestionList = ref([]);
    const nameInput = ref('');
    const searching = ref(false);

    const sendMessage = async () => {
        var date = new Date();
        var formattedDate = date.toLocaleDateString('en-US'); 

        if(!verify()) {
            alert("Fill in all Fields")
            return;
        }

        const messageData = {
            date: formattedDate,
            first_name: firstName.value,
            message: message.value
        }

        try {
            const response = await Connection.newSuggestion(messageData);
            alert(response.data);
        } catch {
            alert("Error sending a message")
        }

        firstName.value = "";
        message.value = "";
    }

    const verify = () => {
        const refArray = [firstName.value, message.value];
        return refArray.every(value => value.trim().length > 0);
    }

    const searchBar = () => {
        searching.value = !searching.value;

        if(searching.value){
            document.getElementById("nameLabel").style.display = "none";
            document.getElementById("nameInput").style.display = "none";
            document.getElementById("searchFor").style.display = "none";
            document.getElementById("clear_button").style.display = "initial";
        }
        else {
            document.getElementById("nameLabel").style.display = "initial";
            document.getElementById("nameInput").style.display = "initial";
            document.getElementById("searchFor").style.display = "initial";
            document.getElementById("clear_button").style.display = "none";
        }
    }

    const reset = () => {
        searchBar();
        getSuggestions();
        nameInput.value = "";
    }

    const getSuggestions = async () => {
        try {
            const response = await Connection.getAllSuggestions();
            suggestionList.value = response.data;
        } catch (error) {
            alert("There was an issue loading suggestions");
        }
    }

    const searchSuggestions = async () => {
        if(!nameInput.value.trim().length > 0)
        {
            return;
        }

        try {
            const response = await Connection.getSuggestionByName({first_name: nameInput.value});
            suggestionList.value = response.data;
            searchBar();
        } catch {
            alert("No suggestions found by the name of " + nameInput.value + ".");
        }
    }

    onMounted(getSuggestions);
</script>