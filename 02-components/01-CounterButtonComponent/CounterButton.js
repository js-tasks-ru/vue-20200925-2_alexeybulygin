export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="onClick">{{ count }}</button>',

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
    onClick() {
      this.$emit('increment', this.count + 1);
    }
  },
  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
