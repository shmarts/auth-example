import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: {
      Authorization: 'Bearer a'
    }
  })
}
