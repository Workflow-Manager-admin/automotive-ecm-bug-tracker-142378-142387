"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import ProtectedRoute from "@/components/ProtectedRoute";
import BugCard from "@/components/BugCard";

const fakeBugs = [
  {
    id: "123",
    title: "Engine misfire DTC not detected",
    status: "Open",
    severity: "Critical",
    module: "PCM",
    created_at: new Date().toISOString(),
    short_description: "After updating the ECM, DTCs for P0300 are not logged...",
  },
  {
    id: "124",
    title: "CAN bus error under load",
    status: "Open",
    severity: "High",
    module: "TCM",
    created_at: new Date().toISOString(),
    short_description: "Bug in CAN bus signal processing observed during transmission load test.",
  },
  {
    id: "125",
    title: "Sensor voltage spike not filtered",
    status: "Resolved",
    severity: "Medium",
    module: "ECM",
    created_at: new Date().toISOString(),
    short_description: "Sensor input not sufficiently filtered, causing driveability issues.",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [module, setModule] = useState("");
  const [severity, setSeverity] = useState("");
  const results = fakeBugs.filter(
    bug =>
      (query === "" || bug.title.toLowerCase().includes(query.toLowerCase()) || bug.short_description.toLowerCase().includes(query.toLowerCase())) &&
      (module === "" || bug.module === module) &&
      (severity === "" || bug.severity === severity)
  );
  const modules = ["", "ECM", "PCM", "TCM", "BCM", "ABS", "SRS", "Other"];
  const severities = ["", "Critical", "High", "Medium", "Low"];

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 p-8 bg-surface">
            <h1 className="text-2xl font-bold text-primary mb-6">Search &amp; Filter Bugs</h1>
            <form className="flex flex-wrap gap-4 mb-6 items-start">
              <input
                className="border px-3 py-2 rounded min-w-[200px]"
                placeholder="Search title or description"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <select
                className="border px-3 py-2 rounded"
                value={module}
                onChange={e => setModule(e.target.value)}
              >
                {modules.map(m => (
                  <option value={m} key={m}>{m || "All Modules"}</option>
                ))}
              </select>
              <select
                className="border px-3 py-2 rounded"
                value={severity}
                onChange={e => setSeverity(e.target.value)}
              >
                {severities.map(s => (
                  <option value={s} key={s}>{s || "All Severities"}</option>
                ))}
              </select>
            </form>
            <div>
              {results.length === 0 && <div className="p-4 text-muted">No bugs found.</div>}
              {results.map(bug => (
                <BugCard key={bug.id} {...bug} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
