describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`neteaseutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(neteaseutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('neteaseutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(neteaseutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`neteaseutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(neteaseutils.arrayEqual(arr, arr))
        });
    });
});