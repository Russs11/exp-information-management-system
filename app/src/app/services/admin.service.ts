'use client'
import { axiosClassic } from '@/api/interceptors'
import { IAdminResponse, IAuthForm, IAuthResponse } from '@/types/auth.types'
import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const adminService = {
  async main(data: IAuthForm) {
		const response = await axiosClassic.post<IAdminResponse>('/admin/login', data)
		
    return response
  },


  async logout() {
    const response = await axiosClassic.post<boolean>('admin/logout')

    if (response.data) removeFromStorage()

    return response
  },
}
