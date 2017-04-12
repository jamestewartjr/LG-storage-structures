import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('addes an element to the hash table.', () => {

      const myHashTable = new HashTable()
      myHashTable.put('foo')
      expect(myHashTable.size()).to.equal( 1 )
    })
  })
})
