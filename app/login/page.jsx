"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Page() {
  const domain = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });
  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
    console.log(`${domain}api/login`);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`${domain}api/auth/login`, credentials);
    console.log(response);
    if (response.status === 200) {
      router.push("/admin");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center font-bold text-2xl">Login</h1>
        <input
          type="text"
          placeholder="Usuario"
          name="user"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Clave"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
