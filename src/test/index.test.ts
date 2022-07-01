import { isPrime } from '../core/common'
import { assert, describe, expect, it } from 'vitest'
import { redAreaRatio, redSum, getLotteries } from '../core'

describe('red test', () => {
  it('foo', () => {
    expect(redSum(['01', '02', '04'])).toBe(7)
    expect(true).to.be.true
  })

  it('redAreaRatio', () => {
    expect(redAreaRatio(['01', '02', '16', '23', '28', '33'])).toBe('2:1:3')
  })

  it('prime', async () => {
    // assert.equal(isPrime(5), true)
    // const data = await getLotteries(10)
    // console.log(data)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})