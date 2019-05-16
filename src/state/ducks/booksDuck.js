import createReducer from '../utils/createReducer'
import { BooksEndpoints } from '../../api'

// Types
export const GET_BOOKS_REQUEST = '[books] GET_BOOKS / REQUEST'
export const GET_BOOKS_SUCCESS = '[books] GET_BOOKS / SUCCESS'

// Initial State
const initialState = {
  items: []
}

// Reducer
export default createReducer(initialState)({
  [GET_BOOKS_SUCCESS]: (state, action) => ({
    ...state,
    items: action.payload.books
  })
})

// Actions
export const getBooks = () => async dispatch => {
  try {
    dispatch(getBooksRequest())
    const response = await BooksEndpoints.getBooks()
    dispatch(getBooksSuccess(response.data))
  } catch (error) {
    console.log(`Error occured on ${getBooksRequest().type}`)
  }
}

export const getBooksRequest = () => ({ type: GET_BOOKS_REQUEST })
export const getBooksSuccess = books => ({
  type: GET_BOOKS_SUCCESS,
  payload: { books }
})
