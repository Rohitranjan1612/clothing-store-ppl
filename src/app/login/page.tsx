"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be 6+ characters");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email }));
    router.push("/products");
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/products");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
        <h1 className="text-xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button className="bg-black text-white p-2">Login</button>
      </form>
    </div>
  );
}
