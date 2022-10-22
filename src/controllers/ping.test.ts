import { ping } from './ping'

describe('ping', () => {
  it('should respond with "pong"', () => {
    expect(ping()).toBe('pong')
  })
})
