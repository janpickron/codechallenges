const { reverseString } = require('./index')

describe('If function exists ', () => {
    test('reverseString function exists', () => {
        expect(reverseString).toBeDefined()
    })
})

describe("If reverseString is working", () => {
    it('should work print elppa', () => {
        expect(reverseString("apple")).toEqual("elppa")
    })

    it('should work print separg', () => {
        expect(reverseString("grapes")).toEqual("separg")
    })

    it('should work print olleh', () => {
        expect(reverseString("hello")).toEqual("olleh")
    })

    it('should work print !sgniteerG', () => {
        expect(reverseString("Greetings!")).toEqual("!sgniteerG")
    })
})