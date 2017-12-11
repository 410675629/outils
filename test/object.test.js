describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual neteaseutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, neteaseutils.deepClone(person))
        });

        it(`person === neteaseutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, neteaseutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`neteaseutils.isEmptyObject({}) should return true`, function () {
            assert(neteaseutils.deepClone({}))
        });

        it(`neteaseutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(neteaseutils.isEmptyObject({
                one: 1
            }))
        });

        it(`neteaseutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(neteaseutils.isEmptyObject([]))
        });
    });
})