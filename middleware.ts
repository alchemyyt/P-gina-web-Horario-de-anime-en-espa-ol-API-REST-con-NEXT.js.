import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/api/authMiddleware";
import { logMiddleware } from "./middlewares/api/logMiddleware";
import { getToken } from "next-auth/jwt";
export const config = {
  matcher: ["/api/:path*"],
};
export default async function middleware(req: NextRequest) {
  if (req.url.includes("/formulario")) {
    const logResult = logMiddleware(req);
    console.log(logResult.response);
  }
  const authResult = authMiddleware(req);
  if (!authResult?.isValid) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  return NextResponse.next();
}
