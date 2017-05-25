const { getDashboardState, reducers: { components: componentRedcuers }, _ } = require('../../helper');

describe('Reducers: Components', () => {

  describe('ACTION: CHANGE_INDEX', () => {
    const length = 10;
    const components = _.repeat({}, length, 'clone');
    components.forEach((c, i) => c.id = i);

    it('should change index of component(s)', () => {      
      let components1 = _.deepClone(components);
      let newState = componentRedcuers.CHANGE_INDEX(components1, {
        target: [7, 5],
        type: 'UP',
      });
      // [..., 4, 5, 6, 7, 8, 9] -> [..., 4, 6, 5, 8, 7, 9]
      let expectedOrder = [4, 6, 5, 8, 7, 9];
      for (let i = 4; i < length; i++) {
        expect(newState[i].id).to.be(expectedOrder[i - 4]);
      }
      
      components1 = _.deepClone(components);
      newState = componentRedcuers.CHANGE_INDEX(components1, {
        target: [2, 3],
        type: 'DOWN',
      });
      // [0, 1, 2, 3, ...] -> [0, 2, 3, 1, ...]
      expect(newState[1].id).to.be(2);
      expect(newState[2].id).to.be(3);
      expect(newState[3].id).to.be(1);

      components1 = _.deepClone(components);
      newState = componentRedcuers.CHANGE_INDEX(components1, {
        target: [8, 4],
        type: 'TOP',
      });
      // [0...9] -> [0, 1, 2, 3, 5, 6, 7, 9, 4, 8]
      expectedOrder = [0, 1, 2, 3, 5, 6, 7, 9, 4, 8];
      for (let i = 0; i < length; i++) {
        expect(newState[i].id).to.be(expectedOrder[i]);
      }

      components1 = _.deepClone(components);
      newState = componentRedcuers.CHANGE_INDEX(components1, {
        target: [6, 2],
        type: 'BOTTOM',
      });
      // [0...9] -> [2, 6, 0, 1, 3, 4, 5, 7, 8, 9]
      expectedOrder = [2, 6, 0, 1, 3, 4, 5, 7, 8, 9];
      for (let i = 0; i < length; i++) {
        expect(newState[i].id).to.be(expectedOrder[i]);
      }
    });

    it('should not change index when target is the topmost or bottommost component', () => {
      let component1 = _.deepClone(components);
      let newState = componentRedcuers.CHANGE_INDEX(component1, {
        target: [0],
        type: 'DOWN',
      });
      //所有的组件的顺序都不应发生变化
      for (let i = 0; i < length; i++) {
        expect(newState[i].id).to.be(i);
      }

      component1 = _.deepClone(components);
      newState = componentRedcuers.CHANGE_INDEX(component1, {
        target: [length - 1],
        type: 'UP',
      });
      //所有的组件的顺序都不应发生变化
      for (let i = 0; i < length; i++) {
        expect(newState[i].id).to.be(i);
      }
      
      // 测试边界处理
      component1 = _.deepClone(components);
      newState = componentRedcuers.CHANGE_INDEX(component1, {
        target: [length - 1, length - 2],
        type: 'TOP',
      });
      //所有的组件的顺序都不应发生变化
      for (let i = 0; i < length; i++) {
        expect(newState[i].id).to.be(i);
      }

    });    
  });

  describe('ACTION: ALIGN_COMPONENT', () => {
    it('should align use minimum/maximum edge of all selected components', () => {
      // state:
      const components = [
        { width: 10, height: 10, left: -20, top: -10 },
        { width: 10, height: 10, left: 0, top: 0 },
        { width: 10, height: 10, left: 30, top: 40 },
        { width: 10, height: 10, left: 110, top: 100 },
      ].map((c, i) => {
        return { box: { region: c }, id: i };
      });
      let components1 = _.deepClone(components);
      let newState = componentRedcuers.ALIGN_COMPONENT(components1, {
        selected: [0, 1, 2, 3],
        type: 'top'
      });
      expect(newState).to.not.be(components1);
      expect(newState.every(c => c.box.region.top === -10)).to.be(true);

      components1 = _.deepClone(components);
      newState = componentRedcuers.ALIGN_COMPONENT(components1, {
        selected: [], //未选中时，数据不做更改
        type: 'left'
      });
      expect(newState).to.be(components1);

      //其他情况，直接测试 _.region 中的方法即可
    });
  });
});

