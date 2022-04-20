import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  async store({ response, request }: HttpContextContract) {

		const body = request.body()

    return response.status(201).send({ email: body.email })
  }
}
