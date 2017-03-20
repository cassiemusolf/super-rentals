import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        details: this.get('details')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', params);
    }
  }
});
