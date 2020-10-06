import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup, getMeetupCoverLink } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<meetup-view v-if="this.rawMeetup" :meetup="this.rawMeetup"></meetup-view>`,

  components: {
    MeetupView,
  },

  data() {
    return {
      rawMeetup: {},
    };
  },

  mounted() {
    this.loadMeetup();
  },

  methods: {
    async loadMeetup() {
      this.rawMeetup = await fetchMeetup(MEETUP_ID);
    },
  }
};
