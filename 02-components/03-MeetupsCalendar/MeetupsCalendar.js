/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="prevMonth"></button>
          <div>{{ title }}</div>
          <button class="rangepicker__selector-control-right" @click="nextMonth"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div v-for="day in days" :class="{'rangepicker__cell_inactive': day.unactive}" class="rangepicker__cell">
          {{ day.name }}
          <a v-for="meetup in day.meetups" class="rangepicker__event">{{ meetup.title }}</a>
        </div>
      </div>
    </div>
  </div>`,

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  data: () => {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
  },

  methods: {
    prevMonth() {
      if ( this.month === 0 ) {
        this.month = 11;
        this.year -= 1;
      } else {
        this.month -= 1;
      }
    },
    nextMonth() {
      if ( this.month === 11 ) {
        this.month = 0;
        this.year += 1;
      } else {
        this.month += 1;
      }
    },
  },

  computed: {
    days() {
      let monthArr = [];

      let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
      let prevMonthDays = new Date(this.year, this.month, 0).getDate();
      let monthStartsAt = new Date(this.year, this.month, 0).getDay();
      let monthLastDay = new Date(this.year, this.month, daysInMonth).getDay();

      // render previous month days
      if ( monthStartsAt > 0 ) {
        for ( let i = prevMonthDays - monthStartsAt; i < prevMonthDays; i++ ) {
          monthArr.push({
            'name': i + 1,
            'date': new Date(this.year, this.month, (i + 1)).toISOString().substr(0, 10),
            'unactive': true,
          });
        }
      }
      // render current month days
      for ( let i = 0; i < daysInMonth; i++ ) {
        monthArr.push({
          'name': i + 1,
          'date': new Date(this.year, this.month, (i + 1)).toISOString().substr(0, 10),
          'meetups': [],
        });
        this.meetups.map(item => {
          let innerDate = new Date(item.date).toISOString().substr(0, 10);
          if ( innerDate === monthArr[i].date ) {
            monthArr[i - 1]['meetups'].push(item);
          }
        });
      }
      // render next month days
      if ( monthLastDay > 0 ) {
        for ( let i = 1; i <= 7 - monthLastDay; i++ ) {
          monthArr.push({
            'name': i,
            'date': new Date(this.year, this.month + 1, (i + 1)).toISOString().substr(0, 10),
            'unactive': true,
          });
        }
      }

      return monthArr;
    },

    title() {
      let month = new Date(this.year, this.month).toLocaleString(navigator.language, {
        month: 'long',
      });
      return `${month} ${this.year}`;
    },
  },

  // В качестве локального состояния требуется хранить что-то,
  // что позволит определить текущий показывающийся месяц.
  // Изначально должен показываться текущий месяц

  // Вычислимые свойства помогут как с получением списка дней, так и с выводом информации

  // Методы понадобятся для переключения между месяцами
};
