<template>
<!--  <div class="progress" style="width: 75%; background-color: rgb(76, 107, 182); opacity: 1;"></div>-->

  <div class="wrapper bg-grey">
    <TheHeader />
    <main class="main">
      <router-view />
    </main>
    <TheFooter />

<!--    <div class="toasts">-->
<!--      <div class="toast toast_success">-->
<!--        <img class="icon" src="icons/icon-check-circle.svg" />-->
<!--        <span>Success</span>-->
<!--      </div>-->
<!--      <div class="toast toast_error">-->
<!--        <img class="icon" src="icons/icon-alert-circle.svg" />-->
<!--        <span>Error</span>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

export default {
  name: 'BaseLayout',

  components: {
    TheHeader,
    TheFooter,
  }
};
</script>

<style scoped>
main {
  flex: 1 0 auto;
}
</style>
