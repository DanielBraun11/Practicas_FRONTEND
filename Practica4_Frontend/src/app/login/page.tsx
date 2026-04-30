"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser } from "@/lib/api/twitter";
import { setCookie, TOKEN_COOKIE, USER_ID_COOKIE, USERNAME_COOKIE } from "@/lib/auth/token";

const LoginPage = () => {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const auth = isRegister
        ? await registerUser(username, email, password)
        : await loginUser(email, password);

      setCookie(TOKEN_COOKIE, auth.token);
      setCookie(USER_ID_COOKIE, auth.user._id);
      setCookie(USERNAME_COOKIE, auth.user.username);
      router.push("/");
    } catch {
      setError("Error al iniciar sesión. Comprueba tus datos.");
    }
  };

  return (
    <section className="pageSection">
      <h1>{isRegister ? "Crear cuenta" : "Entrar"}</h1>
      <form className="card" onSubmit={onSubmit}>
        {isRegister && (
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
            required
          />
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Correo electrónico"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Contraseña"
          required
        />
        <button className="btn primary" type="submit">
          {isRegister ? "Registrarse" : "Entrar"}
        </button>
        <button className="btn" type="button" onClick={() => setIsRegister((prev) => !prev)}>
          {isRegister ? "Ya tengo cuenta" : "Registrarme"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
};

export default LoginPage;