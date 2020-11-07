const { div } = require('./div')

describe('Функция деления', () => {
  test('Функция должна быть объявлена', () => {
    expect(div).toBeDefined()
  })

  test('Деление 4 на 2 должно выдать 2', () => {
    expect(div(4, 2)).toBe(2)
  })
})
