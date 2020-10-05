import { API_URL } from './data.js';

export const MeetupCover = {
  template: `<div class="meetup-cover" :style="cover ? \`--bg-url: url('\${cover}')\` : ''">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  props: {
    cover: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      default: 'Название митапа'
    },
  },

  // Возможно, тут потребуется computed
};
