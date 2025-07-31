"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug, FaSearch, FaTachometerAlt, FaPlusCircle } from "react-icons/fa";

const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    label: "Report Bug",
    href: "/bugs/new",
    icon: <FaPlusCircle />,
  },
  {
    label: "Search",
    href: "/bugs/search",
    icon: <FaSearch />,
  },
  {
    label: "All Bugs",
    href: "/bugs",
    icon: <FaBug />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-60 h-full bg-sidebar border-r border-gray-200 py-6 px-2">
      <div className="mb-10 px-4 font-bold text-xl text-primary tracking-wide">
        <span>ECM Bug Finder</span>
      </div>
      <nav className="flex flex-col gap-1">
        {navLinks.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-md font-medium transition
              ${
                pathname === nav.href
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-primary/10"
              }`}
          >
            <span className="text-lg">{nav.icon}</span>
            {nav.label}
          </Link>
        ))}
      </nav>
      <div className="flex-grow"></div>
      <div className="px-4 text-xs text-muted">v1.0</div>
    </aside>
  );
}
