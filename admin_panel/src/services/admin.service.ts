'use client'
import { axiosClassic } from '@/api/interceptors'
import { IAuthAdminResponse, IAuthForm } from '@/types/auth.types'

export const authAdminService = {
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
    return response
  },
}
