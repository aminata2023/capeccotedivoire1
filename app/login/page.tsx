"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (res?.ok) {
      router.push("/admin"); // redirection après login
    } else {
      setError("Identifiants invalides");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded-xl">
      <h1 className="text-xl font-semibold mb-4">Connexion</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}
        <input name="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input name="password" type="password" placeholder="Mot de passe" className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-black text-white p-2 rounded">Se connecter</button>
      </form>
    </div>
  );
}
