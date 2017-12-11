describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            neteaseutils.setCookie('test', 'getTestValue')
        })
        it(`neteaseutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(neteaseutils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            neteaseutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            neteaseutils.setCookie('test', 'removeTestValue')
        })
        it(`neteaseutils.removeCookie('test') should return false`, function () {
            neteaseutils.removeCookie('test')
            assert.notEqual(neteaseutils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`neteaseutils.getCookie('test', 'setCookie') should return true`, function () {
            neteaseutils.setCookie('test', 'setCookie')
            assert(neteaseutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            neteaseutils.removeCookie('test')
        })
    })
})