<template>
    <transition-group name="notification" tag="main" >
        <main class="main" v-for="notification in notifications" :key="notification.id">
            <h3 >
                -- {{ notification.message }} --
            </h3>
        </main>
        </transition-group>
  </template>
  
  <script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
  
    const store = useStore();
    const notifications = computed(() => store.state.notifications);

    const hasNotifications = computed(() => notifications.value.length > 0);
  </script>
  

<style scoped>
    .main {
        text-align: center;
        min-height: 2rem;
        height: fit-content;
        padding-left: 1rem;
        padding-right: 1rem;
        line-height: 2.5;
        background: var(--color-background-soft);
        border: solid 2px var(--color-heading);
        border-radius: .5rem;
        margin-top: 1rem;
        transition: .4s;
    }

    .notification-enter-active,
.notification-leave-active {
  transition: opacity 1s;
}

.notification-enter,
.notification-leave-to {
  opacity: 0;
}

/* Adjust the animation direction as needed */
.notification-enter-to {
  opacity: 1;
  animation: fade-in-from-right ease 1s;
}

.notification-leave {
  opacity: 1;
  animation: fade-out-to-right ease 1s;
}

@keyframes fade-in-from-right {
  0% {
    opacity: 0;
    transform: translateX(2rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-out-to-right {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(5rem);
  }
}
</style>

