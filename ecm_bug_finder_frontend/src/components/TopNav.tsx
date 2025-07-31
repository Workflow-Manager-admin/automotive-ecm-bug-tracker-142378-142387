"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { getUser, logoutUser } from "@/lib/auth";

export default function TopNav() {
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    setUser(getUser());
  }, []);

  function handleLogout() {
    logoutUser();
    setUser(null);
    router.push("/login");
  }

  return (
    <header className="bg-nav w-full flex items-center px-8 py-3 border-b border-gray-200 shadow-sm min-h-[56px]">
      <div className="flex-1"></div>
      {user ? (
        <div className="flex items-center gap-3">
          <span className="font-medium text-secondary flex items-center gap-2">
            <FaUserCircle className="text-primary text-xl" />
            {user.name || user.email || "User"}
          </span>
          <button
            className="ml-4 bg-accent text-white px-3 py-1.5 rounded-lg hover:bg-accent/90 transition font-semibold shadow"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="ml-2 bg-primary text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-secondary transition"
        >
          Login
        </Link>
      )}
    </header>
  );
}
