import { NextRequest, NextResponse } from 'next/server'
import { JwtToken } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request

  const jwtToken = cookies.get(JwtToken.JWT_TOKEN)?.value

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
