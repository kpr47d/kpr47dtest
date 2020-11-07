const { multiply } = require('./div')

describe('Функция умножения', () => {
  test('Функция должна быть объявлена', () => {
    expect(multiply).toBeDefined()
  })

  test('Умножение 4 на 2 должно выдать 8', () => {
    expect(multiply(4, 2)).toBe(8)
  })
})
