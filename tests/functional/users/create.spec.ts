import { test } from '@japa/runner'

test.group('Users create', () => {
  test('It should be create a user', async ({ client }) => {
    
    const payload = {
      username: 'Alberto',
      email: 'email@email.com',
      password: '123456'
    }

    const response = await client.post('/users').json(payload);

    response.assertStatus(404);

  })  
})
