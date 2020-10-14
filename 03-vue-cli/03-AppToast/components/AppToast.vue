<template>
  <div class="toasts">
    <div class="toast" :class="toast.toastClass" v-for="toast in toastItems">
      <app-icon :icon="toast.toastIcon" />
      <span>{{ toast.toastText }}</span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;

export default {
  name: 'AppToast',

  components: { AppIcon },

  data() {
    return {
      toastItems: [],
    }
  },

  methods: {
    error(message) {
      let toastClass = 'toast_error';
      let toastIcon = 'alert-circle';
      this.addToast(message, toastClass, toastIcon);
    },

    success(message) {
      let toastClass = 'toast_success';
      let toastIcon = 'check-circle';
      this.addToast(message, toastClass, toastIcon);
    },

    addToast(toastText, toastClass, toastIcon) {
      this.toastItems.push({
        toastText,
        toastClass,
        toastIcon,
      });
      setTimeout(() => {
        this.toastItems.shift();
      }, DELAY);
    },

  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
