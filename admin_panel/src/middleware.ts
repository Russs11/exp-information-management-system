import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens, JwtToken } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const jwtToken = cookies.get(JwtToken.JWT_TOKEN)?.value
  console.log(jwtToken)
  const isDashboardPage = url.includes('/i')
  const isAuthPage = url.includes('/auth')

  if (isAuthPage) {
    if (jwtToken) {
      return NextResponse.redirect(new URL('/i', url))
    }
    return NextResponse.next()
  }
  // if (isAuthPage) {
  //   return NextResponse.next()
  // }
  // // if (isDashboardPage && !refreshToken) {
  // //   return NextResponse.redirect(new URL('/404', url))
  // // }
  if (!jwtToken) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: ['/i/:path*', '/auth/:path*'],
}
