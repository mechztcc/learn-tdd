import { test } from '@japa/runner'

test.group('Users create', () => {
  test('It should be create a user', async ({ client, assert }) => {
    const payload = {
      username: 'Alberto2',
      email: 'email2@email.com',
      password: '123456',
      avatar: 'http://images.com/images/1',
    }

    const response = await client.post('/users').json(payload)

    const body = response.body()

    response.assertStatus(201)
    assert.exists(body.id);
  })
})
