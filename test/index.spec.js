const assert = require('assert')
const {add} = require('../src/index')

describe('should check add function', () => {
    it('should return response', () => {
        const result = add(2,2)
        assert.equal(result,4)
    })
})