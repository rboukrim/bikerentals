import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `data`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
