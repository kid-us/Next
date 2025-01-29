export { default } from "next-auth/middleware";

// import { NextRequest, NextResponse } from "next/server";

// export const middleware = (request: NextRequest) => {
//   return NextResponse.redirect(new URL("/login", request.url));
// };

export const config = {
  matcher: ["/users"],
};
