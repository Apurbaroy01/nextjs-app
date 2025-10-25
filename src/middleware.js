import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const currentCookie = request.cookies.get("nextjs-token")
  console.log( currentCookie)
  
  const dummyUserData = {
    role: "user",
    email: "test@gmail.com",
  }

  // ❌ Typo: should be 'startsWith', not 'startWith'
  let isServicesPage = request.nextUrl.pathname.startsWith("/serveces")
  let isAdmin = dummyUserData.role === "admin"

  // redirect if trying to access services page and not admin
  if (isServicesPage && !isAdmin) {
    return NextResponse.rewrite(new URL("/", request.url))
  }

  return NextResponse.next()
}

// Optional: specify where middleware should apply
export const config = {
  matcher: ["/serveces/:path*"], // applies only to /services routes
}
