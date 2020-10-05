import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="{{ agendaIcon ? '/assets/icons/icon-\`${agendaIcon}\`.svg' : '' }}" />
      </div>
      <div class="meetup-agenda__item-col">{{ item.startsAt }} - {{ item.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ item.title ? item.title : agendaTitle }}</h5>
        <template v-if="item.speaker">
        <p>
          <span>{{ item.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ item.language }}</span>
        </p>
        </template>
        <p v-if="item.description">{{ item.description }}</p>
      </div>
    </div>`,

  props: {
    item: {
      type: Object,
      required: true,
    }
  },

  computed: {
    agendaTitle() {
      return agendaItemTitles[this.item.type];
    },
    agendaIcon() {
      return agendaItemIcons[this.item.type];
    }
  }

  // Возможно, тут потребуется computed
};
