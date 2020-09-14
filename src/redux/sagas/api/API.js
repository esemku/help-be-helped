import axios from 'axios'

export const API_AUTH = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API,
  responseType: 'json'
})
