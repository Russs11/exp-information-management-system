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
    const response = await axiosClassic.get<boolean>('/admin/logout')
    removeFromStorage()

    return response
  },
}
