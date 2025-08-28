export enum JwtToken {
  'JWT_TOKEN' = 'jwtToken',
}
export interface IAuthForm {
  login: string
  password: string
}

export interface IUser {
  id: string
  createAt?: string
  updateAt?: string
  login?: string
  name?: string
  surname?: string
  patronymic?: string
  role?: string
  password?: string
}

export interface IAuthAdminResponse {
  user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
