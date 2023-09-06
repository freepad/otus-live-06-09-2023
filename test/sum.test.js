const sum = require('./sum')
const request = require('supertest')
const { faker } = require('@faker-js/faker')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4)
})

test('success create user', async () => {
  const randomName = faker.person.fullName()

  const response = await request('https://reqres.in')
    .post('/api/users')
    .send({
      name: randomName,
      job: 'leader'
    })

  expect(response.status).toBe(201)
  expect(response.body.name).toBe(randomName)
  expect(response.body.job).toBe('leader')
})
