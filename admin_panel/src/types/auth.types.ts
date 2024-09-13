export interface IAuthForm {
  login: string
  password: string
}

export interface IUser {
  id: string
  createAt: string
  updateAt:string
  login?: string
  name?: string
  role?: string
  password?: string
}

export interface IAuthResponse {
  user: IUser
  accessToken: string
}

export interface IAdminResponse {
  user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
