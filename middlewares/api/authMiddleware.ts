const validate = (token: any) => {
  const password = process.env.PASSWORD;
  let validToken = false;
  if (token === `Bearer ${password}`) {
    validToken = true;
  }
  if (!validToken || !token) {
    return false;
  }
  return true;
};
export function authMiddleware(req: Request): any {
  const token = req.headers.get("authorization");
  return { isValid: validate(token) };
}
