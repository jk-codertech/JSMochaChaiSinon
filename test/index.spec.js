const assert = require('assert')
const { expect } = require('chai')
const {add} = require('../src/index')

describe('should check add function', () => {
    it('should return response', () => {
        const result = add(2,2)
        //assert.equal(result,4)
        expect(result).to.be.eq(4)
    })

    it('should take one number as argument', () => {
        const result = add(2)
        expect(result).to.be.eq(2)
    })
})