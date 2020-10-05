import { API_URL } from './data.js';

export const MeetupCover = {
  template: `<div class="meetup-cover" :style="--bg-url: url(\'${cover}\')">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  data: {
    imageId: null,
  },

  props: {
    imageId: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      default: 'Название митапа'
    },
  },

  computed: {
    cover() {
      return `${API_URL}/images/${imageId}`;
    }
  }

  // Возможно, тут потребуется computed
};
