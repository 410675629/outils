describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('neteaseutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(neteaseutils.isEmail("leiquanlive.com"))
        });
        it('neteaseutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(neteaseutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('neteaseutils.isIdCard("622224188203234033") should return true ', function () {
            assert(neteaseutils.isIdCard("622224188203234033"))
        });
        it('neteaseutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!neteaseutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('neteaseutils.isPhoneNum("18882324234") should return true ', function () {
            assert(neteaseutils.isPhoneNum("18882324234"))
        });
        it('neteaseutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(neteaseutils.isPhoneNum("8618882324234"))
        });
        it('neteaseutils.isPhoneNum("5534553") should return false', function () {
            assert(!neteaseutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('neteaseutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(neteaseutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('neteaseutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(neteaseutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('neteaseutils.isUrl("www.baidu.com") should return true', function () {
            assert(neteaseutils.isUrl("www.baidu.com"))
        });
        it('neteaseutils.isUrl("baidu.com") should return true', function () {
            assert(neteaseutils.isUrl("baidu.com"))
        });
        it('neteaseutils.isUrl("http://baiducom") should return false', function () {
            assert(!neteaseutils.isUrl("http://baiducom"))
        });
    });

});