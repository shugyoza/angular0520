export const url = {

    logo: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=800&height=800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_DogUIUeT1Ke3UvxGQbPGA%2Fnormalized.jpg",

    client: {
        feed: '/feed',
        settings: '/settings',
        profile: '/profile',
        admin: '/admin',
        login: '/login',
        register: '/register'
      },

    api: {
      base: 'http://localhost:4231/',

      register: {
        route: 'api/news/',
        path: {
          checkUsername: 'checkExistByUsername/',
          checkEmail: 'checkExistByEmail/',
          getUserById: 'getUserById/',
          createUser: 'createNewAccount/'
        }
      },
      login: {
        route: 'api/login/',
        path: ''
      },
      news: {
        route: 'api/news/',
        path: ''
      },
      users: {
        route: 'api/users/',
        path: {
          getOne: 'getProfile/',
          getAll: 'getAllUsers/'
        }
    }
  }
}
