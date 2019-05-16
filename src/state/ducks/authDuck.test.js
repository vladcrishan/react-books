import createReducer, {
  loginRequest,
  loginSuccess,
  logoutSuccess,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from './authDuck'

describe('Auth Actions', () => {
  it('should create a LOGIN_REQUEST action', () => {
    // arrange
    const expectedAction = {
      type: LOGIN_REQUEST
    }

    // act
    const action = loginRequest()

    // assert
    expect(action).toEqual(expectedAction)
  })

  it('should create a LOGIN_SUCCESS action', () => {
    // arrange
    const user = {
      id: 1792854466756608,
      first_name: 'Leo',
      last_name: 'Piazzini',
      avatar: 'https://picsum.photos/g/200',
      role: 'Business Analyst',
      city: 'Timisoara',
      books_number: 9,
      return_date: '2019-03-16T13:37:09.985Z'
    }
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: {
        user: {
          id: 1792854466756608,
          first_name: 'Leo',
          last_name: 'Piazzini',
          avatar: 'https://picsum.photos/g/200',
          role: 'Business Analyst',
          city: 'Timisoara',
          books_number: 9,
          return_date: '2019-03-16T13:37:09.985Z'
        }
      }
    }

    // act
    const action = loginSuccess(user)

    // assert
    expect(action).toEqual(expectedAction)
  })
})

describe('Auth Reducers', () => {
  it('should replace user when passed a LOGIN_SUCCESS', () => {
    // arrange
    const newUser = {
      id: 137591399645184,
      first_name: 'Jeff',
      last_name: 'Giacomelli',
      avatar: 'https://picsum.photos/g/200',
      role: 'Software Developer',
      city: 'Sibiu',
      books_number: 3,
      return_date: '2019-03-21T03:13:19.949Z'
    }

    const action = loginSuccess(newUser)

    //act
    const newState = createReducer({}, action)

    //assert
    expect(newState.user.id).toEqual(137591399645184)
    expect(newState.user.first_name).toEqual('Jeff')
    expect(newState.user.last_name).toEqual('Giacomelli')
    expect(newState.user.avatar).toEqual('https://picsum.photos/g/200')
    expect(newState.user.role).toEqual('Software Developer')
    expect(newState.user.city).toEqual('Sibiu')
    expect(newState.user.books_number).toEqual(3)
    expect(newState.user.return_date).toEqual('2019-03-21T03:13:19.949Z')
  })

  it('should empty user when passed a LOGOUT_SUCCESS', () => {
    // arrange
    const action = logoutSuccess()

    //act
    const newState = createReducer({}, action)

    //assert
    expect(newState.user).toEqual(null)
  })
})
