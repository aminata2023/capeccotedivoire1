"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Identifiants incorrects");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto mt-20 bg-white shadow rounded-xl">
      <h1 className="text-xl font-bold mb-4">Connexion</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input name="email" placeholder="Email" className="w-full border p-2 mb-2 rounded" />
      <input name="password" type="password" placeholder="Mot de passe" className="w-full border p-2 mb-2 rounded" />
      <button className="w-full bg-black text-white p-2 rounded" type="submit">Se connecter</button>
    </form>
  );
}
