const { _ } = require('../../helper');

describe('Utils', () => {
  describe('Defaults', () => {
    // _.clone
    describe('#clone', () => {
      it('should clone any object', () => {
        let objs = [
          1,
          '222',
          true,
          new Date(),
          /[a-k1-9]+/i,
          function () {},
          undefined,
          null
        ];
        objs.forEach(obj => {
          const x = _.clone(obj);
          expect(x).to.be(obj);
        });

        // object
        const x = { a: 1, b: {} };
        const x1 = _.clone(x);
        expect(x1).to.not.be(x);
        expect(x1.a).to.be(1);
        expect(x1.b).to.be(x.b); //浅复制

        const array = [1, 2, {}];
        const array1 = _.clone(array);
        expect(array1).to.not.be(array);
        expect(array1[2]).to.be(array[2]);
      });
    });

    // _.deepClone
    describe('#deepClone', () => {
      it('should do deep clone for object', () => {
        const x = {
          a: {
            b: {
              c: {
                d: Math.random()
              }
            }
          },
          e: [
            { f: new Date() }
          ]
        };
        const x1 = _.deepClone(x);
        expect(x1).to.not.be(x);
        expect(x1.a).to.not.be(x.a);
        expect(x1.a.b).to.not.be(x.a.b);
        expect(x1.a.b.c).to.not.be(x.a.b.c);
        expect(x1.e[0]).to.not.be(x.e[0]);
      });

      it('should return null when object has circular ref', () => {
        const x = {
          a: {
            b: 1
          }
        };
        x.a.c = x.a;
        expect(_.deepClone(x)).to.not.be.ok();
        expect(_.deepClone(x)).to.be(null);
      });
    });

    // _.repeat
    describe('#repeat', () => {
      it('should repeat obj for [x] times', () => {
        let objs = [
          1,
          '222',
          true,
          new Date(),
          /[a-k1-9]+/i,
          { x: 1 },
          [1, 2, 3],
          function () {},
          undefined,
          null
        ];
        objs.forEach(obj => {
          let results = _.repeat(obj, 10);
          expect(results).to.have.length(10);
          expect(results.every(c => c === obj)).to.be(true);
        });
      });

      it('should do clone when set cloneType to "clone"', () => {
        let obj = { x: 1 };
        const results = _.repeat(obj, 10, 'clone');
        expect(results.every(c => c !== obj)).to.be(true);
      });

      it('should do deep clone when set cloneType to "deepClone"', () => {
        let obj = { x: { y: 1 } };
        const results = _.repeat(obj, 10, 'clone');
        expect(results.every(c => c !== obj)).to.be(true);
        expect(results.map(c => c.x).every(c => c !== obj)).to.be(true);
      });
    });

    // _.remove
    describe('#remove', () => {
      it('should remove specific item in array', () => {
        const array = [1, 2, 3];
        _.remove(array, 2);
        expect(array).to.have.length(2);
        expect(array[0]).to.be(1);
        expect(array[1]).to.be(3);
      });

      it('should have no effect to remove item which not in the array', () => {
        const array = [1, 2, 3];
        _.remove(array, 4);
        expect(array).to.have.length(3);
      });

      it('should do nothing when param1 not an Array', () => {
        const obj = { x: 1 };
        _.remove(obj, 1);
        expect(obj).to.have.property('x');
      });
    });

    // _.walker
    describe('#walker', () => {
      const tree = {
        value: 0,
        children: [{
          value: 1
        }, {
          value: 2,
          children: [{
            value: 3
          }]
        }],
      };
      it('should walk every tree node', () => {
        let tree1 = _.deepClone(tree);
        let i = 0;
        _.walker(tree1, 'children', node => {
          node.touched = true;
          node.i = i++;
        });
        expect(tree1.touched).to.be(true);
        expect(tree1.i).to.be(0);
        tree1.children.forEach(node => {
          expect(node.touched).to.be(true);
        });
      });
    });
  });
});