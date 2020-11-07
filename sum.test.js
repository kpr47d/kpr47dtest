const { sum } = require('./sum')

describe('Тестирование функции сложения', () => {
  test('Функция должна быть объявлена', () => {
    expect(sum).toBeDefined()
  })
  test('1 + 3 должно быт ьравно 4', () => {
    expect(sum(1, 3)).toBe(4)
  })
})
