<template>
    <main>
        <div class="hBox">
            <div class="side_nav">
                <RouterLink class="link" to="/">Home</RouterLink>
                <h1 class="title">Selection</h1>
                <input class="radio" type="radio" name="navSelection" id="messageRadio" value="messages" v-model="selectedComponent">
                <label class="navigation" :class="{ active: selectedComponent === 'messages' }" for="messageRadio">View Messages</label>
                <input class="radio" type="radio" name="navSelection" id="suggestionRadio" value="suggestions" v-model="selectedComponent">
                <label class="navigation" :class="{ active: selectedComponent === 'suggestions' }" for="suggestionRadio">View Suggestions</label>
                <input class="radio" type="radio" name="navSelection" id="critismRadio" value="criticisms" v-model="selectedComponent">
                <label class="navigation" :class="{ active: selectedComponent === 'criticisms' }" for="critismRadio">View Criticisms</label>
                <input class="radio" type="radio" name="navSelection" id="visitRadio" value="visits" v-model="selectedComponent">
                <label class="navigation" :class="{ active: selectedComponent === 'visits' }" for="visitRadio">View Visits</label>
                <!-- <button class="link navigation">View Visits</button> -->

                <div class="suggestionControls">
                    <h2 class="title">Suggestion Controls</h2>
                    <label for="fulfill">Fulfilling Id:</label>
                    <input id="fufill" type="number" @keyup.enter="fulfill" v-model="fulfillingId"/>

                    <br/>

                    <label for="deletion">Deleting Id:</label>
                    <input id="deletion" type="number" @keyup.enter="deleteSug" v-model="deletionId"/>
                </div>

                <div class="visitControls">
                        <h2 class="title">Visit Controls</h2>
                        <button @click='deleteRecentVisit'>Delete Recent Visit</button>
                </div>
            </div>

            <div class="display">
                <h1>Display</h1>
                <component :is="selectedComponentComponent" :key="keyUpdater"/>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        padding: 2rem;
        width: 100%;
        min-height: 100%;
        text-align: center;
    }

    label {
        align-self: flex-start;
        text-decoration: solid underline;
    }

    input {
        width: 5rem;
        line-height: 1.5rem;
        background: var(--color-background-mute);
        border: solid 1px var(--color-heading);
        border-radius: .5rem;
        color: var(--color-text);
        padding-left: .5rem;
        padding-right: .5rem;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    .title {
        text-decoration: solid underline;
    }

    .hBox {
        gap: 2rem;
    }

    .navigation {
        width: 65%;
        height: fit-content;
        padding-top: .5rem;
        padding-bottom: .5rem;
        text-decoration: none;
        align-self: center;
        background: var(--color-background-mute);
        border: solid 1px var(--color-heading);
        border-radius: 5px;
    }

    .navigation.active {
  border: 2px solid var(--color-theme);
}


    .radio {
        display: none;
    }

    .side_nav {
        background: var(--color-background-mute);
        border: solid 2px var(--color-heading);
        border-radius: 1rem;
        align-self: flex-start;
        min-width: 18rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        align-items: center;
    }

    .suggestionControls {
        width: 100%;
        height: 100%;
    }

    .display {
        flex-grow: 1;
        min-height: 100%;
        align-self: flex-start;
        overflow: auto;
    }

    #suggestionsComponent, #messagesComponent, #criticsComponent {
        display: none;
    }
    
</style>


<script setup>
import { ref, computed } from 'vue';
import adminSuggestions from '@/components/adminSuggestions.vue';
import adminMessages from '@/components/adminMessages.vue';
import adminCritisms from '@/components/adminCritisms.vue';
import adminVisits from '@/components/adminVisits.vue';
import Connection from '@/server/Connection';
import { useStore } from 'vuex';

const store = useStore();

const selectedComponent = ref('messages');
const fulfillingId = ref(0);
const deletionId = ref(0);
const keyUpdater = ref(0);

fulfillingId.value = null;
deletionId.value = null;

const verify = (id) => {
    return id > 0;
}

const fulfill = async () => {
    if (!verify(fulfillingId.value)) {
        return;
    }

    try {
        const response = await Connection.fulfillSuggestionById({ id: fulfillingId.value });
        createNotification(response.data);
        fulfillingId.value = null;
    } catch (error) {
        createNotification("Error");
    }
    refreshComponent();
};

const deleteSug = async () => {
  if (!verify(deletionId.value)) {
    return;
  }

  try {
    const response = await Connection.deleteSuggestionById(deletionId.value);
    createNotification(response.data);
    deletionId.value = null;
  } catch {
    createNotification("Error");
  }
  refreshComponent();
};



const selectedComponentComponent = computed(() => {
  if (selectedComponent.value === 'messages') {
    return adminMessages;
  } else if (selectedComponent.value === 'suggestions') {
    return adminSuggestions;
  } else if (selectedComponent.value === 'criticisms') {
    return adminCritisms;
  } else if(selectedComponent.value === 'visits') {
    return adminVisits;
  }
  else {
    return null; // Handle other cases if needed
  }
});

const deleteRecentVisit = async () => {
    try {
        const response = await Connection.deleteLastVisit();
        createNotification(response.data);
    } catch {
        createNotification("Unable to delete recent visit");
    }
    refreshComponent();
}

const refreshComponent = () => {
  // Increment the key value to trigger component refresh
  setTimeout(() => {
      keyUpdater.value += 1;
  }, 500);
};

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