<template>
  <main>
    <div class="hBox">
      <div class="display-table">
        <h2 class="section-title">Critics List</h2>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th id="idColumn">Id</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="visit in visitList" :key="visitList.id">
                <td>{{ visit.id }}</td>
                <td>{{ visit.lastVisit }}</td>
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

input,
textarea {
  width: 100%;
  line-height: 1.5rem;
  background: var(--color-background-mute);
  border: solid 1px var(--color-heading);
  border-radius: 0.5rem;
  color: var(--color-text);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  resize: none;
}

textarea {
  height: 10rem;
}

#idColumn {
    width: 2rem;
}

.section-title {
  text-decoration: solid underline;
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
import { ref, onMounted } from "vue";
import Connection from "@/server/Connection";
import { useStore } from "vuex";

const store = useStore();

const visitList = ref([]);

const getSuggestions = async () => {
  try {
    const response = await Connection.getRecentVisits();
    visitList.value = response.data;
  } catch (error) {
    createNotification("There was an error getting visits.");
  }
};

const createNotification = (message) => {
  const notification = {
    id: new Date().getTime(),
    message: message,
  };

  store.commit("addNotification", notification);

  removeExpiredNotifications();
};

const removeExpiredNotifications = () => {
  setTimeout(() => {
    store.commit("removeOldestNotification");
  }, 10000);
};

onMounted(getSuggestions);
</script>
