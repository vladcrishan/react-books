import axios from 'axios'

export default class BooksEndpoints {
  static getBooks = () => axios.get('/books')
}
