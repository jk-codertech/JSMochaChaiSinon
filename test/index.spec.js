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

    it('should take no arguments and return 0', () => {
      const result = add()
      expect(result).to.be.eq(0)  
    })

    it('should return 0 if arguments are strings', () => {
        const result = add(2,'hello')
        expect(result).to.be.eq(0)
    })
})