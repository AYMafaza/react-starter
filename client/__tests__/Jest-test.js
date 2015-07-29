// ensure jest is set up and running correctly
describe('sum', function() {
 it('adds 1 + 2 to equal 3', function() {
   expect((1 + 2)).not.toBe(4);
   expect((1 + 2)).toBe(3);
 });
});
