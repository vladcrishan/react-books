import axios from 'axios'

export default class UserEndpoints {
  static getUser = () => axios.get(`/user`)
}
