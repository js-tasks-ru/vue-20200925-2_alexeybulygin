export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" :count="count" @click="increment(count)">{{ count }}</button>',

  props: {
    count: {
      type: Number,
      default: 0,
      required: true,
    },

  },

  model: {
    prop: 'count',
    event: 'click',
  },

  methods: {
    increment(count) {
      let newValue = count;
      newValue++;
      this.$emit('click', newValue);
    }
  },
  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
