import { NextResponse } from "next/server";

export async function GET() {
  // Clear the token by setting the cookie with an empty value and immediate expiry
  console.log('logout');
  
//   const response = NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_BASE_URL));
const response = NextResponse.json({
    message: "Logout successful",
    success: true,
})
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0), // Set an expired date
  });

  return response;
}
