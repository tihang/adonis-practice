'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/navbar', () => "Hello to nav component")

Route
  .resource('customers', 'CustomerController')
  .apiOnly()


//AUTH routes
Route
  .post('login', 'UserController.login')

Route
  .post('register', 'UserController.register')
  .middleware('guest')

Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')



//Wildcard route for SPA's
Route.any('*', ({ view }) => view.render('main'))
