import createReducer from '../utils/createReducer'
import { CategoriesEndpoints } from '../../api'

// Types
export const GET_CATEGORIES_REQUEST = '[categories] GET_CATEGORIES / REQUEST'
export const GET_CATEGORIES_SUCCESS = '[categories] GET_CATEGORIES / SUCCESS'

export const UPDATE_SELECTED_CATEGORY = '[categories] UPDATE_SELECTED_CATEGORY'

export const UPDATE_CATEGORY = '[categories] UPDATE_CATEGORY'

// Initial State
const initialState = {
  items: [],
  selectedCategory: -1
}

// Reducer
export default createReducer(initialState)({
  [GET_CATEGORIES_SUCCESS]: (state, action) => ({
    ...state,
    items: action.payload.categories
  }),

  [UPDATE_SELECTED_CATEGORY]: (state, action) => ({
    ...state,
    selectedCategory: action.payload.selectedCategory
  }),

  [UPDATE_CATEGORY]: (state, action) => {
    const { category } = action.payload

    return {
      ...state,
      items: state.items.map(item => (item.id === category.id ? { ...category } : item))
    }
  }
})

// Actions
export const getCategories = () => async dispatch => {
  try {
    dispatch(getCategoriesRequest())
    const response = await CategoriesEndpoints.getCategories()
    dispatch(getCategoriesSuccess(response.data))
  } catch (error) {
    console.log(`Error occured on ${getCategoriesRequest().type}`)
  }
}

export const updateSelectedCategory = categoryId => dispatch => dispatch(updateSelected(categoryId))

export const updateCategory = category => dispatch => dispatch(updateCat(category))

export const getCategoriesRequest = () => ({ type: GET_CATEGORIES_REQUEST })
export const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { categories }
})

export const updateSelected = categoryId => ({
  type: UPDATE_SELECTED_CATEGORY,
  payload: { selectedCategory: categoryId }
})

export const updateCat = category => ({
  type: UPDATE_CATEGORY,
  payload: {
    category
  }
})
