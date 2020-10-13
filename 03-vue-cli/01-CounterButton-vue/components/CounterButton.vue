<template>
  <button @click="onClick">{{ count }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    }
  },

  methods: {
    onClick() {
      this.$emit('increment', this.count + 1);
    }
  },

  model: {
    prop: 'count',
    event: 'increment',
  },

};
</script>

<style></style>
