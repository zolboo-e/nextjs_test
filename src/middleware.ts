//
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|static|_next|assets|favicon.ico|_nuxt|__webpack_hmr|_loading).*)",
  ],
};
const authRoutes: string[] = ["/login"];
export const middleware: NextMiddleware = async (request) => {
  // let response: NextResponse | undefined;

  // // auth routes
  // response = checkAuthRoutes(request);
  // if (response) return response;

  // // protected routes
  // response = checkProtectedRoutes(request);
  // if (response) return response;

  return NextResponse.next();
};

const checkAuthRoutes = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const appSession = request.cookies.get("appSession");

  if (appSession && authRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }
};
const checkProtectedRoutes = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const appSession = request.cookies.get("appSession");

  if (!appSession && !authRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    // if (url.pathname !== "/") {
    //   url.search = `?redirectTo=${url.pathname}`;
    // }
    url.pathname = "/login";

    return NextResponse.redirect(url);
  }
};
