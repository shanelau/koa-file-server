const DSC_BASE = '';

const Component = require('../../../../../../src/app/client/components/dsc/core/component.js');
const { ListView, Item } = require('../../../../../../src/app/client/components/dsc/ListView');

describe('Components', () => {
  describe('Common', () => {
    describe('DSC', () => {
      describe('ListView', () => {

        it('should select specified item when provide selected', done => {
          const TestComponent = Component.extend({
            template: '<ListView on-change={this._onChange($event)}></ListView>',
            _onChange(ev) {
              expect(ev.select).to.not.ok();
              done();
            }
          });
          const comp = new TestComponent();
        })
      });

      describe('Item', () => {

      });
    });
  });
});