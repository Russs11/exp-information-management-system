import { axiosWithAuth } from '@/api/interceptors'
import { IUser, TypeUserForm } from '@/types/auth.types'

export interface IProfileResponse {
  user: IUser
}


class AdminService {
  private BASE_URL = '/admin'

  // async getProfile() {
  //   const response = await axiosWithAuth.get<IProfileResponse>(
  //     this.BASE_URL + '/profile'
  //   )
  //   return response.data
  // }
  async getAll() {
    const response = await axiosWithAuth.get<IUser[]>(
      this.BASE_URL + '/get_all'
    )
    return response.data
  }

  // async update(data: TypeUserForm) {
  //   const response = await axiosWithAuth.put(this.BASE_URL + '/update', data)
  //   return response.data
  // }
  // async testAdmin() {
  //   const response = await axiosWithAuth.get(this.BASE_URL + '/testAdmin')
  //   return response.data
  // }
}

export const userService = new AdminService()
