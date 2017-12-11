describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(neteaseutils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(neteaseutils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= neteaseutils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = neteaseutils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})