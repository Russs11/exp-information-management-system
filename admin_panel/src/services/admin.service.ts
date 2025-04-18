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

  async createUser(data: IUser) {
    const response = await axiosWithAuth.post<IUser>(
      this.BASE_URL + '/create_user_by_admin',
      data
    )
    console.log(response.data)
    return response.data
  }

  async getUserProfile(userId: string | null) {
    const response = await axiosWithAuth.get<IUser>(
      this.BASE_URL + `/get_user_profile/${userId}`
    )
    return response.data
  }

  async getCurrentUserProfile() {
    const response = await axiosWithAuth.get<IUser>(
      this.BASE_URL + `/get_current_user_profile`
    )
    return response.data
  }

  async updateUser(userId: string | null, data: TypeUserForm) {
    const response = await axiosWithAuth.put<TypeUserForm>(
      this.BASE_URL + `/update_user/${userId}`,
      data
    )
    return response.data
  }

  async deleteUser(id: { id: string }) {
    const response = await axiosWithAuth.delete(
      this.BASE_URL + '/delete_user',
      { params: id }
    )
    return response
  }
}

export const adminService = new AdminService()
