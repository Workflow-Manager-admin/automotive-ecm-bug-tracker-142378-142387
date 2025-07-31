"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !pwd || !name) {
      setError("Please complete all fields.");
      return;
    }
    if (!email.endsWith("@ecm.com")) {
      setError("Registration is restricted to ECM email addresses.");
      return;
    }
    if (pwd.length < 3) {
      setError("Password must be at least 3 characters.");
      return;
    }
    // Simulate register (replace with backend call as needed)
    loginUser({ email, name, token: "dummy_token" });
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen bg-background items-center justify-center">
      <div className="w-full max-w-md bg-surface px-6 py-10 rounded-xl shadow border">
        <h2 className="text-2xl font-bold mb-4 text-primary text-center">Register to ECM Bug Finder</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Full Name"
            type="text"
            value={name}
            autoComplete="name"
            onChange={e => setName(e.target.value)}
          />
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
            autoComplete="new-password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
          />
          {error && <div className="text-accent text-sm font-semibold">{error}</div>}
          <button
            className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded transition"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="text-sm text-center mt-3">
          Already have an account? <a className="text-accent font-semibold" href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
}
