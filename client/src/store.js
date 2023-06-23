// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      notifications: [],
      maxNotifications: 6,
    };
  },
  mutations: {
    addNotification(state, notification) {
      if (state.notifications.length >= state.maxNotifications) {
        state.notifications.shift(); // Remove the oldest notification
      }
      state.notifications.push(notification);
    },
    removeOldestNotification(state) {
      if (state.notifications.length > 0) {
        state.notifications.shift(); // Remove the oldest notification
      }
    },
  },
});

export default store;
