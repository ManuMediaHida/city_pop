// This file is presumably named _middleware.js and should be located in the root of your Next.js project

export { default } from "next-auth/middleware";

export const config = { 
  matcher: [
    "/dashboard/:path*", 
    "/singers/:path*", 
    "/songs/:path*"    
  ] 
}
