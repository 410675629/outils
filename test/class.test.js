describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`neteaseutils.addClass($ele, 'test') should return true`, function () {
            neteaseutils.addClass($ele, 'test')
            assert(neteaseutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            neteaseutils.addClass($ele, 'test')
        })
        it(`neteaseutils.hasClass($ele, 'test') should return true`, function () {
            assert(neteaseutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            neteaseutils.addClass($ele, 'test')
        })
        it(`neteaseutils.removeClass($ele, 'test') should return false`, function () {
            neteaseutils.removeClass($ele, 'test')
            assert.notEqual(neteaseutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});