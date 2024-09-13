'use client'
import { axiosClassic } from '@/api/interceptors'
import { IAdminResponse, IAuthForm } from '@/types/auth.types'

export const adminService = {
  async main(data: IAuthForm) {
    const response = await axiosClassic.post<IAdminResponse>(
      '/admin/login',
      data
    )
    console.log(response)

    return response
  },

  async logout() {
    const response = await axiosClassic.post<boolean>('admin/logout')

    return response
  },
}
