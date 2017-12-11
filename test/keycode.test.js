describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`neteaseutils.getKeyName(13) should return "Enter"`, function () {
            assert(neteaseutils.getKeyName(13) === 'Enter')
        });
    });

});