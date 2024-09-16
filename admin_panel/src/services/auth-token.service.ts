import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export enum JwtToken {
'JWT_TOKEN' = 'jwtToken'
}
// export const getAccessToken = () => {
// 	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
// 	return accessToken || null
// }

// export const saveTokenStorage = (accessToken: string) => {
// 	// Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
// 	// 	domain: 'localhost',
// 	// 	sameSite: 'strict',
// 	// 	expires: 1
// 	// })
// 	Cookies.set(JwtToken.JWT_TOKEN, accessToken, {
//     domain: 'localhost',
//     sameSite: 'strict',
//     expires: 1,
//   })
// }

// export const removeFromStorage = () => {
// 	// Cookies.remove(EnumTokens.ACCESS_TOKEN)
// 	Cookies.remove(JwtToken.JWT_TOKEN)
// }