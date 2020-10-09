import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <meetup-cover :link="cover" :title="meetup.title"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <template v-if="meetup.description">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            </template>

            <template v-if="meetup.agenda">
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
            </template>
          </div>
          <div class="meetup__aside">
            <meetup-info v-if="meetup.organizer" :organizer="meetup.organizer" :place="meetup.place" :date="date"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    }
  },

  computed: {
    cover() {
      if ( this.meetup.imageId ) {
        return getMeetupCoverLink(this.meetup);
      }
    },
    date() {
      return new Date(this.meetup.date);
    }
  }

};
