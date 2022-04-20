import { test } from '@japa/runner'

test.group('Users create', () => {
  test('It should be create a user', async ({ client, assert }) => {
    
    const payload = {
      username: 'Alberto',
      email: 'email@email.com',
      password: '123456',
      avatar: 'http://images.com/images/1'
    }

    const response = await client.post('/users').json(payload);

    const body = response.body();

    response.assertStatus(201);
    response.assertBody({ email: payload.email });
    // assert.exists(body.email)
  })  
})
