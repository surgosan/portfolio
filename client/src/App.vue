<script setup>
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import messageForm from "@/components/messageForm.vue";
import suggestionForm from "./components/suggestionForm.vue";
import critismForm from "./components/critismForm.vue";
import Connection from "@/server/Connection";
import notification from "./components/notification.vue";

const store = useStore();

const dialogOpen = ref(false);

const toggleDialog = () => {
  dialogOpen.value = !dialogOpen.value;

  if (document.getElementById("selections").style.display == "none") {
      document.getElementById("selections").style.display = "flex";
  }
    document.getElementById("messageForm").style.display = "none";
    document.getElementById("suggestionForm").style.display = "none";
    document.getElementById("critismForm").style.display = "none";
};

function closeDialogOptions() {
    document.getElementById("selections").style.display = "none";
}

const openMessage = () => {
    closeDialogOptions();
    document.getElementById("messageForm").style.display = "initial";
};

const openSuggestion = () => {
    closeDialogOptions();
    document.getElementById("suggestionForm").style.display = "initial";
};

const openCritism = () => {
    closeDialogOptions();
    document.getElementById("critismForm").style.display = "initial";
};

const newVisit = async () => {
  try {
    const currentDate = new Date();
    const options = {
        timeZone: 'America/New_York',
        hour12: false,
    };
    const formattedDate = currentDate.toLocaleString('en-US', options);

    const response = await Connection.newVisit({ lastVisit: formattedDate });
    console.log(response);
  } catch {
    console.log("New visit was not recorded");
  }
};

  onMounted(newVisit);

const createNotification = (message) => {
  const notification = {
    id: new Date().getTime(), // Unique identifier for the notification
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
</script>

<template>
  <RouterView />
  <div class="contact-service" @click="toggleDialog">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width="50px"
      height="50px"
      fill-rule="nonzero"
    >
      <g transform="translate(-10.24,-10.24) scale(1.08,1.08)">
        <g
          fill="#000000"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <g transform="scale(5.12,5.12)">
            <path
              d="M25,4c-12.68359,0 -23,8.97266 -23,20c0,6.1875 3.33594,12.06641 8.94922,15.83984c-0.13281,1.05078 -0.66406,3.60156 -2.76562,6.58594l-1.10547,1.56641l1.97656,0.00781c5.42969,0 9.10156,-3.32812 10.30859,-4.60547c1.83203,0.40234 3.72656,0.60547 5.63672,0.60547c12.68359,0 23,-8.97266 23,-20c0,-11.02734 -10.31641,-20 -23,-20z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>

  <dialog class="dialog-main" :open="dialogOpen">
    <div class="dialog-content">
      <div class="dialog-title">
        <h2>Send me a message!</h2>
      </div>
      <button class="dialog-button" @click="toggleDialog">Close</button>

      <div class="dialog-selection" id="selections">
        <button class="dialog-button" @click="openMessage">Message</button>
        <button class="dialog-button" @click="openSuggestion">
          Suggestion
        </button>
        <button class="dialog-button" @click="openCritism">Critism</button>
      </div>
      <messageForm id="messageForm" />
      <suggestionForm id="suggestionForm" />
      <critismForm id="critismForm" />
    </div>
  </dialog>

  <div class="notification_container">
    <notification />
  </div>
</template>

<style scoped>
#messageForm {
  display: none;
}

#suggestionForm {
  display: none;
}

#critismForm {
  display: none;
}

.notification_container {
  position: fixed;
  bottom: 12%;
  right: 1.5%;
  z-index: 99;
}
</style>
