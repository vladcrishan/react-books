import axios from 'axios'

export default class CategoriesEndpoints {
  static getCategories = () => axios.get('./categories')
}
