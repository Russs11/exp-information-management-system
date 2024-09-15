'use client'
import { axiosClassic } from '@/api/interceptors'
import { IAuthAdminResponse, IAuthForm } from '@/types/auth.types'
import { removeFromStorage } from './auth-token.service'

export const adminService = {
  async main(data: IAuthForm) {
    const response = await axiosClassic.post<IAuthAdminResponse>(
      '/admin/login',
      data
    )
    console.log(response)

    return response
  },

  async logout() {
    const response = await axiosClassic.post<boolean>('auth/logout')

    if (response.data) removeFromStorage()

    return response
  },
}
