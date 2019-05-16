import createReducer, {
  getBooksRequest,
  getBooksSuccess,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS
} from './booksDuck'

describe('Books Actions', () => {
  it('should create a GET_BOOKS_REQUEST action', () => {
    const expectedAction = {
      type: GET_BOOKS_REQUEST
    }

    const action = getBooksRequest()
    expect(action).toEqual(expectedAction)
  })

  it('should create a GET_BOOKS_SUCCESS action', () => {
    const books = [
      {
        id: 1260232195964928,
        thumbnail: 'https://picsum.photos/200',
        title: 'Robinson Crusoe',
        description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
        categoryId: 4
      },
      {
        id: 8532803245309952,
        thumbnail: 'https://picsum.photos/200',
        title: 'White Fang',
        description: 'White Fang is a novel by American author Jack London...',
        categoryId: 1
      }
    ]

    const expectedAction = {
      type: GET_BOOKS_SUCCESS,
      payload: {
        books: [
          {
            id: 1260232195964928,
            thumbnail: 'https://picsum.photos/200',
            title: 'Robinson Crusoe',
            description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
            categoryId: 4
          },
          {
            id: 8532803245309952,
            thumbnail: 'https://picsum.photos/200',
            title: 'White Fang',
            description: 'White Fang is a novel by American author Jack London...',
            categoryId: 1
          }
        ]
      }
    }

    const action = getBooksSuccess(books)
    expect(action).toEqual(expectedAction)
  })
})

describe('Books Reducers', () => {
  it('should add books when passed a GET_BOOKS_SUCCESS', () => {
    // arrange
    const newbook = {
      id: 111,
      thumbnail: 'aaa',
      title: 'Black Fang',
      description: 'abc',
      categoryId: 3
    }

    const action = getBooksSuccess(newbook)

    //act
    const newState = createReducer({}, action)

    //assert
    expect(newState.items.id).toEqual(111)
    expect(newState.items.thumbnail).toEqual('aaa')
    expect(newState.items.title).toEqual('Black Fang')
    expect(newState.items.description).toEqual('abc')
    expect(newState.items.categoryId).toEqual(3)
  })
})
