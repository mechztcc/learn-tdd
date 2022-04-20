import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  async store ({ response }: HttpContextContract) {
		return response.status(201);
	}
}
