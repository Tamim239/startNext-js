import { NextResponse } from "next/server";

const user = false;

export const middleware = (request) => {
  // if(request.nextUrl.pathname.startsWith('/about')){
  //     return NextResponse.redirect(new URL('/contacts', request.url))
  // }

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // return NextResponse.redirect(new URL('/contacts', request.url))
  NextResponse.next();
};

// export const config = {
//     matcher: '/about'
// }
export const config = {
  matcher: ["/dashboard", "/services"],
};
