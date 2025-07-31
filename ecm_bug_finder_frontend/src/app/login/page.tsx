"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !pwd) {
      setError("Please enter both fields.");
      return;
    }
    // Simulate login for now (replace with real backend call as needed)
    if (email.endsWith("@ecm.com") && pwd.length > 2) {
      loginUser({ email, name: email.split("@")[0], token: "dummy_token" });
      router.push("/dashboard");
    } else {
      setError("Invalid credentials or not a valid ECM user.");
    }
  }

  return (
    <div className="flex min-h-screen bg-background items-center justify-center">
      <div className="w-full max-w-md bg-surface px-6 py-10 rounded-xl shadow border">
        <h2 className="text-2xl font-bold mb-4 text-primary text-center">Login to ECM Bug Finder</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Email (example@ecm.com)"
            type="email"
            value={email}
            autoComplete="username"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
          />
          {error && <div className="text-accent text-sm font-semibold">{error}</div>}
          <button
            className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded transition"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="text-sm text-center mt-3">
          Don&apos;t have an account? <a className="text-accent font-semibold" href="/register">Register</a>
        </div>
      </div>
    </div>
  );
}
