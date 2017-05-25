
const { reducers: { global: globalReducers } } = require('../../helper');

describe('Reducers: All', () => {
  describe('ACTION: CHANGE_TITLE', () => {
    it('should change report title of state', () => {
      const state = {};
      const payload = { title: 'title' };
      const newState = globalReducers.CHANGE_TITLE(state, payload);
      expect(state).not.to.be(newState);
      expect(newState).have.property('title');
      expect(newState.title).to.be(payload.title);
    });
  });
});

