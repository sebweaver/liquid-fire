import Ember from "ember";
export default Ember.Component.extend({
  classNames: ['liquid-child'],

  didInsertElement() {
    Ember.run.schedule('afterRender', this, () => {
      let $container = this.$();
      if ($container) {
        $container.css('visibility','hidden');
      }
      this.sendAction('liquidChildDidRender', this);
    });
  }
});
