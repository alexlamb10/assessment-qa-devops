const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray returns an array with same length', () => {
        let array = [1,2,3]
        expect(shuffleArray(array)).toHaveLength(array.length)
    })

    test('shuffleArray constains a value from starting array', () => {
        let arr = [2,8,12]
        expect(shuffleArray(arr)).toContain(arr[1])
    })
})