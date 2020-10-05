export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="onClick(count)">{{ count ? count : 0 }}</button>',

  props: {
    count: {
      type: Number,
      default: 0,
      required: false,
    },

  },

  model: {
    prop: 'count',
    event: 'increment',
  },

  methods: {
    onClick(count) {
      let newValue = count;
      newValue++;
      this.$emit('increment', newValue);
    }
  },
  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
