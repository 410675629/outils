describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`neteaseutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${neteaseutils.getExplore()}`)
            assert(/^Chrome:/.test(neteaseutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`neteaseutils.getOS() should return "windows"`, function () {
            console.log(`OS:${neteaseutils.getOS()}`)
            assert(neteaseutils.getOS() === 'windows' || neteaseutils.getOS() === 'MacOSX' || neteaseutils.getOS() === 'linux')
        });
    });
});