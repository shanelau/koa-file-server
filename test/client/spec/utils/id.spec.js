const { UID, cuid, id } = require('../../../../src/app/client/util/id');

describe('Utils', () => {
  describe('id', () => {
    it('#updatePrefix should update prefix while provide template', () => {
      const uid = new UID(1, { x: 'X'}, '${x}-${k1}_${k2}-');
      uid.updatePrefix({
        k1: 23,
        k2: 'Vg'
      });
      expect(uid.next()).to.be('X-23_Vg-1');
      expect(uid.next()).to.be('X-23_Vg-2');
      uid.updatePrefix('k1', 'I am k1');
      expect(uid.next()).to.be('X-I am k1_Vg-3');
    });

    it('#next should increase seed', () => {
      const uid = new UID(1);
      expect(uid.next()).to.be((1).toString(36));
      expect(uid.next()).to.be((2).toString(36));
    });

    it('API:#id shoudl return id with valid format', () => {
      //cuid use template '${c}-${uid}-${rid}-${did}-'
      cuid.updatePrefix({
        uid: 111,
        rid: 222,
        did: 333
      });
      expect(id()).to.match(/^c-111-222-333-\w+/);
    });

    it('API:cuid#next should return unique id', () => {
      cuid.updatePrefix({
        uid: 1,
        rid: 22,
        did: 333,
      });
      const set = new Set();
      let times = 100;
      while(times--) {
        let id = cuid.next();
        expect(set.has(id)).to.be(false);
        set.add(id);
      }
    });
  });
});