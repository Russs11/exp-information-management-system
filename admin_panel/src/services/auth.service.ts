import { axiosClassic } from '@/api/interceptors'
import { IAuthForm, IAuthResponse } from '@/types/auth.types'
import { NextResponse } from 'next/server'
import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
  async main(data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>('/auth/login', data)

    if (response.data.user.role !== 'user') {
      alert('Недостоточно прав для входа в админ панель')
      return NextResponse.redirect('/auth')
    }
    
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
    return response
  },
  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      '/auth/login/access-token'
    )

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  },

  async logout() {
    const response = await axiosClassic.post<boolean>('auth/logout')

    if (response.data) removeFromStorage()

    return response
  },
}