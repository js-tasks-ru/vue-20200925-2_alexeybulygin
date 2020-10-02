import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data: {
    cleanMeetup: {},
  },

  mounted() {
    this.fetchMeetups();
  },

  computed: {
    meetup() {
      return this.cleanMeetup;
    }
  },

  methods: {
    async fetchMeetups() {
      let response = await fetch(`${API_URL}/meetups/${MEETUP_ID}`);
      this.cleanMeetup = await response.json();
      let meetupParams = {
        cover: this.cleanMeetup.imageId ? getMeetupCoverLink(this.cleanMeetup) : undefined,
        date: new Date(this.cleanMeetup.date),
        localDate: new Date(this.cleanMeetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        ISODate: new Date(this.cleanMeetup.date).toISOString().substr(0, 10),
      };
      Object.assign(this.cleanMeetup, meetupParams);
      this.cleanMeetup.agenda.map(agenda => {
        if ( agenda.title === null ) agenda.title = agendaItemTitles[agenda.type];
        agenda.icon = agendaItemIcons[agenda.type];
      });
    },
    // Получение данных с API предпочтительнее оформить отдельным методом,
    // а не писать прямо в mounted()
  },
});
