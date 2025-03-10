import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path: string = request.nextUrl.pathname;

  if (path.startsWith("/_next") || path.startsWith("/static") || path.startsWith("/api")) {
    return NextResponse.next();
  }

  const allowedPaths = [
    "/", 
    "/services", 
    "/work", 
    "/about", 
    "/verticals", 
    "/careers", 
    "/ideas", 
    "/news", 
    "/contact", 
    "/privacy"
  ];

  if (!allowedPaths.includes(path)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// All paths
export const config = {
  matcher: "/:path*",
};
