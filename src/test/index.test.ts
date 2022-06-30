import { assert, describe, expect, it } from 'vitest'
import { redSum } from '../core'

describe('suite name', () => {
  it('foo', () => {
    expect(redSum(['01', '02', '04'])).toBe(7)
    expect(true).to.be.true
  })

  it('bar', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})