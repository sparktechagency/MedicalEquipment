// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// function checkAuth(request: NextRequest) {
//   const cookiesHeader = request.headers.get("cookie");
//   console.log(cookiesHeader);
//   console.log(cookies);
//   const accessToken = cookies?.token || null;
//   const refreshToken = cookies?.refreshToken || null;
//   // If tokens are missing, redirect to login page
//   if (!accessToken || !refreshToken) {
//     const loginUrl = new URL("/login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }
//   return NextResponse.next();
// }
// // Middleware function that checks protected paths
// export function middleware(request: NextRequest) {
//   const protectedPaths = [
//     "/ConfirmBooking",
//     "/ConfirmBookingAutoSale",
//     "/Profile",
//     "/autoSaleHistory",
//     "/ChangePassword",
//   ];
//   if (protectedPaths.some((path) => request.nextUrl.pathname.includes(path))) {
//     return checkAuth(request);
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/ConfirmBooking",
//     "/ConfirmBookingAutoSale",
//     "/Profile",
//     "/autoSaleHistory",
//     "/ChangePassword",
//   ],
// };
