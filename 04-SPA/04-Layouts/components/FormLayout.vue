<template>
  <div class="page page_meetup-forms">
    <div class="container">
      <h2 class="page__title">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLayout',
  props: {
    title: {
      type: String,
    }
  }
};
</script>

<style scoped>
.page.page_meetup-forms {
  padding: 70px 0;
}

</style>
