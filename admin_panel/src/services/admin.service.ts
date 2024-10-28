import { axiosWithAuth } from '@/api/interceptors'
import { IUser, TypeUserForm } from '@/types/auth.types'

export interface IProfileResponse {
  user: IUser
}


class AdminService {
  private BASE_URL = '/admin'

  async getAll() {
    const response = await axiosWithAuth.get<IUser[]>(
      this.BASE_URL + '/get_all'
    )
    return response.data
  }

  async createUser(data:IUser) {
    const response = await axiosWithAuth.post<IUser>(
      this.BASE_URL + '/create_user_by_admin', data
    )
    console.log(response.data);
    return response.data
  }
}

export const adminService = new AdminService()
