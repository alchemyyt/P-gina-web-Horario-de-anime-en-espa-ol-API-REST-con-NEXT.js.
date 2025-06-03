// Asegúrate de importar NextResponse primero
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
export async function POST(request) {
  const correctPassword = process.env.NEXT_PUBLIC_PASSWORD;
  const { user, password } = await request.json();

  if (user !== "ati" || password !== correctPassword) {
    return NextResponse.json(
      { error: "Credenciales inválidas" },
      { status: 401 }
    );
  }

  // 3. Configuración de la cookie
  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET ||
        "5d38a39556d4eacd2acbf7a896da19eb650e51a6cdb843e2dbe90a092f4f85c7"
    );
    const token = await new SignJWT({
      user: user,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(secret);
    const response = NextResponse.json(
      { message: "Login exitoso" },
      { status: 200 }
    );
    response.cookies.set({
      name: "tokenName",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 2,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Error generando JWT:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
