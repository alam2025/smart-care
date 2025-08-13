import { NextResponse } from "next/server";
import * as jose from "jose";

// Define protected routes and public pages
const protectedRoutes = ["/dashboard", "/profile", "/settings", "/vote"];
const publicPages = ["/login", "/signup"]; // Pages restricted for logged-in users

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.NEXTAUTH_SECRET),
};

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log("🚀 ~ middleware ~ pathname:", pathname);

  // Skip middleware for backend API calls going to Node.js server
  // These usually start with /api/v1/ when hitting localhost:4000
  if (pathname.startsWith("/api/v1")) {
    return NextResponse.next();
  }

  // Get JWT token from cookies
  const token = req.cookies.get("token")?.value;

  // Check if user is logged in
  let isLoggedIn = false;
  let userId = null;
  let userEmail = null;

  if (token) {
    try {
      const decoded = await jose.jwtVerify(token, jwtConfig.secret);
      console.log("🚀 ~ middleware ~ decoded:", decoded);
      userId = decoded.payload.id;
      userEmail = decoded.payload.email;
      console.log("🚀 ~ middleware ~ userId:", userId);
      isLoggedIn = true;
    } catch (err) {
      console.log("🚀 ~ middleware ~ err:", err);
    }
  }

  // If accessing protected routes and not logged in, redirect to login
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // If accessing public pages (login/signup) and already logged in, redirect to dashboard
  if (publicPages.some((page) => pathname.startsWith(page))) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Add userId to request headers for internal API calls (optional)
  if (userId) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", userId);
    requestHeaders.set("x-user-email", userEmail);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/login",
    "/signup",
    "/vote/:path*",
    // "/v1/:path*"
  ],
};


// import { NextResponse } from "next/server";
// import * as jose from "jose";

// // Define protected routes and public pages
// const protectedRoutes = ["/dashboard", "/profile", "/settings","/vote","/api/v1","/v1"];
// const publicPages = ["/login", "/signup"]; // Pages restricted for logged-in users

// const jwtConfig = {
//   secret: new TextEncoder().encode(process.env.NEXTAUTH_SECRET),
// };

// export async function middleware(req) {
//   const { pathname } = req.nextUrl;
//   console.log("🚀 ~ middleware ~ pathname:", pathname);

//   // Get JWT token from cookies
//   const token = req.cookies.get("token")?.value;
//   // console.log("🚀 ~ middleware ~ token:", token);

//   // Check if user is logged in
//   let isLoggedIn = false;
//   let userId = null;
//   let userEmail = null;
//   if (token) {
//     try {
//       // Verify the token
//       const decoded = await jose.jwtVerify(token, jwtConfig.secret);
//       console.log("🚀 ~ middleware ~ decoded:", decoded);
//       userId = decoded.payload.id;
//       userEmail = decoded.payload.email // Extract user ID from the token
//       console.log("🚀 ~ middleware ~ userId:", userId);
//       isLoggedIn = true;
//     } catch (err) {
//       console.log("🚀 ~ middleware ~ err:", err);
//     }
//   }

//   console.log("check", protectedRoutes.some((route) => {
//     // pathname.startsWith(route)
//     console.log(route,pathname.startsWith(route));
    
//   }));
  
//   // If accessing protected routes and not logged in, redirect to login
//   if (protectedRoutes.some((route) => pathname.startsWith(route))) {
//     if (!isLoggedIn) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }

//   // If accessing public pages (login/signup) and already logged in, redirect to dashboard
//   if (publicPages.some((page) => pathname.startsWith(page))) {
//     if (isLoggedIn) {
//       return NextResponse.redirect(new URL("/dashboard", req.url));
//     }
//   }

//   // Add userId to request headers for API routes
//   if (userId) {
//     const requestHeaders = new Headers(req.headers);
//     requestHeaders.set("x-user-id", userId); // Add custom header
//     requestHeaders.set("x-user-email", userEmail); // Add custom header
//     return NextResponse.next({
//       request: {
//         headers: requestHeaders,
//       },
//     });
//   }

//   // Allow the request to proceed
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/settings/:path*",
//     "/login",
//     "/signup",
//     "/vote/:path*",
//     "/v1/:path*",
//   ], // Include API routes
// };