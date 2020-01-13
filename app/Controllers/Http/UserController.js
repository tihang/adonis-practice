'use strict'

const User = use('App/Models/User')

class UserController {

  async login ({ request, response, auth }) {

    const { email, password } = request.all()
    const token = await auth.attempt(email, password)

    return response.status(200).json({token});
  }


  async register({ request, response }){

    const { username, email, password } = request.only(['username', 'email', 'password'])
    const user = await User.create({ username, email, password})

    return response.status(201).json({
      'message': 'User successfully created'
    })
  }


  async show({ response, params}) {

    const user = await User.find(params.id)
    const data = {
      'username' : user.username,
      'email' : user.email
    }

    return response.status(200).json(data);
  }

}

module.exports = UserController
