export default {
  changeItem: function changeItem({item}) {
    const state = this.state.set(item);
    this.emitter.emit(state);
  },

  resetItem: function resetItem() {
    const state = this.state.reset();
    this.emitter.emit(state);
  }
};