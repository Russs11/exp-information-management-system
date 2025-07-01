import { authAdminService } from '@/services/auth-admin.service'
import axios, { type CreateAxiosDefaults } from 'axios'
import { errorCatch } from './error'

const options: CreateAxiosDefaults = {
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    // retry: 2
  },
  withCredentials: true,
   
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config
    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'Unauthorized') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      authAdminService.logout()
      // try {
      //   return axiosWithAuth.request(originalRequest)
      // } catch (error) {
      //   if (errorCatch(error) === 'Unauthorized') {
      //     console.log(error)
      //   }
      // }
    }
    throw error
  }
)

export { axiosClassic, axiosWithAuth }
