const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'test',
    email: 'test@gmail.com',
    password: 'test1234'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'abc',
        email: "abc@gmail.com",
        password: 'test1234'
    }).expect(201)
})

test('should login a user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'hii@hii.com',
        password: 'test1234'
    }).send(400)
})

