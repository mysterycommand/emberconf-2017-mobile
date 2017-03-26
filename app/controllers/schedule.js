import Ember from 'ember';
import moment from 'moment';

const { Controller, computed } = Ember;

export default Controller.extend({
  queryParams: ['session'],
  session: null,
  _days: computed('model', 'model.[]', function () {
    let days = {};
    this.get('model').forEach(function(scheduleItem) {
      let day = moment(scheduleItem.get('start')).format('YYYY-MM-DD');
      if (!days[day]) {
        days[day] = []
      }
      days[day].push(scheduleItem);
    });
    let dayList = [];
    for (let d in days) {
      dayList.push({
        label: moment(d),
        date: moment(d),
        events: days[d].sortBy('start')
      });
    }
    return dayList.sort((a, b) => a.date.valueOf() - b.date.valueOf());
  })
});
