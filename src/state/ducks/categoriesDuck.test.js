import createReducer, {
  getCategoriesRequest,
  getCategoriesSuccess,
  updateSelected,
  updateCat,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  UPDATE_SELECTED_CATEGORY,
  UPDATE_CATEGORY
} from './categoriesDuck'

describe('Categories Actions', () => {
  it('should create a GET_CATEGORIES_REQUEST action', () => {
    const expectedAction = {
      type: GET_CATEGORIES_REQUEST
    }

    const action = getCategoriesRequest()
    expect(action).toEqual(expectedAction)
  })

  it('should create a GET_CATEGORIES_SUCCESS action', () => {
    const categories = [
      {
        id: 0,
        name: 'egovibut',
        color: '#e9e42e'
      },
      {
        id: 1,
        name: 'iwi',
        color: '#4a0035'
      },
      {
        id: 2,
        name: 'meruf',
        color: '#17768d'
      },
      {
        id: 3,
        name: 'titkab',
        color: '#7ab49f'
      },
      {
        id: 4,
        name: 'heplel',
        color: '#e8fa73'
      }
    ]

    const expectedAction = {
      type: GET_CATEGORIES_SUCCESS,
      payload: {
        categories: [
          {
            id: 0,
            name: 'egovibut',
            color: '#e9e42e'
          },
          {
            id: 1,
            name: 'iwi',
            color: '#4a0035'
          },
          {
            id: 2,
            name: 'meruf',
            color: '#17768d'
          },
          {
            id: 3,
            name: 'titkab',
            color: '#7ab49f'
          },
          {
            id: 4,
            name: 'heplel',
            color: '#e8fa73'
          }
        ]
      }
    }

    const action = getCategoriesSuccess(categories)
    expect(action).toEqual(expectedAction)
  })

  it('should create a UPDATE_SELECTED_CATEGORY action', () => {
    const categoryId = -1
    const expectedAction = {
      type: UPDATE_SELECTED_CATEGORY,
      payload: { selectedCategory: -1 }
    }

    const action = updateSelected(categoryId)
    expect(action).toEqual(expectedAction)
  })

  it('should create a UPDATE_CATEGORY action', () => {
    const category = {
      id: 0,
      name: 'egovibut',
      color: '#e9e42e'
    }

    const expectedAction = {
      type: UPDATE_CATEGORY,
      payload: {
        category: {
          id: 0,
          name: 'egovibut',
          color: '#e9e42e'
        }
      }
    }

    const action = updateCat(category)
    expect(action).toEqual(expectedAction)
  })
})

describe('Categories Reducers', () => {
  it('should add categories when passed a GET_CATEGORIES_SUCCESS', () => {
    // arrange
    const category = {
      id: 0,
      name: 'egovibut',
      color: '#e9e42e'
    }

    const action = getCategoriesSuccess(category)

    //act
    const newState = createReducer({}, action)

    //assert
    expect(newState.items.id).toEqual(0)
    expect(newState.items.name).toEqual('egovibut')
    expect(newState.items.color).toEqual('#e9e42e')
  })
})
