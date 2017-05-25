const { getDashboardState, reducers: { all } } = require('../../helper');

describe('Reducers: All', () => {
  describe('ACTION: REPLACE_REPORT', () => {
    it('should replace state with payload', () => {
      const state = {};
      const payload = { x: new Date() };
      const newState = all.REPLACE_REPORT(state, payload);
      expect(newState).to.not.be(state);
      expect(newState).to.be(payload);
    });
  });

  // it('ACTION: DELETE_COMPONENT', () => {
  //   const state = getDashboardState();
  //   state.dashboard.groups.push()
  //   const payload = 
  // })
});

