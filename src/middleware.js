import { NextResponse } from 'next/server'
export function middleware(request) {

   

    const token = request.cookies.get('token')?.value



    const { pathname } = request.nextUrl;

    const loggedUserNotAccessPaths = pathname ==="/login" || pathname === "/registration";

    const notLoggedUserNotAccessPaths = pathname ==="/profile" || pathname === "/dashboard";

    const cartPath = pathname === "/cart"

    if (loggedUserNotAccessPaths) {
        if (token) {
            return  NextResponse.redirect(new URL("/", request.url))
        }
    }
    else{
        if(notLoggedUserNotAccessPaths || cartPath){
            if(!token){
                return  NextResponse.redirect(new URL("/", request.url))
            }
        }
    }
    // return NextResponse.next();

}

export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*', '/cart/:path*', "/login", "/registration"],

}