import { type NextFetchEvent, NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRewritesFromBackend } from "./getRewritesFromBackend";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // Forward these standard requests
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Simulate getting the rewrites from a backend (like a CMS)
  const rewrites = await getRewritesFromBackend();

  // Check if the pathname is in the rewrites object
  if (pathname in rewrites) {
    const { rewriteUrl, locale } = rewrites[pathname as keyof typeof rewrites];

    // Choose which page template to use
    return NextResponse.rewrite(
      new URL(`/${locale}${rewriteUrl}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/:path*"],
};
