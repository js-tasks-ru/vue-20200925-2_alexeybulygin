import { API_URL } from './data.js';

export const MeetupCover = {
  template: `<div class="meetup-cover" :style="link ? \`--bg-url: url('\${link}')\` : ''">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  props: {
    link: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
      default: 'Название митапа'
    },
  },

  // Возможно, тут потребуется computed
};
