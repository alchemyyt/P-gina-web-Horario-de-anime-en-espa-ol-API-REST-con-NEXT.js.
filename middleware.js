import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const method = request.method;
  // 1. Definir rutas públicas
  const publicRoutes = [
    "/api/auth",
    "/login",
    "/api/public",
    "/_next/static",
    "/_next/image",
    "/favicon.ico",
  ];
  const isPublic = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  // Permitir acceso a rutas públicas sin verificación
  if (isPublic) {
    return NextResponse.next();
  }
  // Caso especial: Permitir solo GET en /api/v1/es/animes sin autenticación
  const isAnimesRoute =
    pathname === "/api/v1/es" || pathname.startsWith("/api/v1/es");

  if (isAnimesRoute && method === "GET") {
    return NextResponse.next();
  }
  const isProtected =
    pathname.startsWith("/admin") || pathname.startsWith("/api/v1");

  // 2. Verificar rutas protegidas
  if (isProtected) {
    let token;

    // Obtener token según el tipo de ruta
    if (pathname.startsWith("/api/v1")) {
      const authHeader = request.headers.get("authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      } else {
        token = request.cookies.get("tokenName")?.value;
      }
    } else {
      token = request.cookies.get("tokenName")?.value;
    }

    if (!token || typeof token !== "string") {
      console.error("Token inválido o faltante");
      if (pathname.startsWith("/api/v1")) {
        return new NextResponse(
          JSON.stringify({ error: "Acceso no autorizado" }),
          { status: 401, headers: { "Content-Type": "application/json" } }
        );
      } else {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
      }
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET ||
          "5d38a39556d4eacd2acbf7a896da19eb650e51a6cdb843e2dbe90a092f4f85c7"
      );
      const { payload } = await jwtVerify(token, secret);

      if (!payload.user) {
        throw new Error("Token inválido");
      }

      if (pathname.startsWith("/api/v1")) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-user-id", payload.userId);
        return NextResponse.next({ request: { headers: requestHeaders } });
      }
    } catch (error) {
      console.error("Error validando JWT:", error);
      return new NextResponse(JSON.stringify({ error: "Token inválido" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/v1/:path*"],
};
