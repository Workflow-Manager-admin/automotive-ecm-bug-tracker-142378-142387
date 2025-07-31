"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import ProtectedRoute from "@/components/ProtectedRoute";
import BugCard from "@/components/BugCard";

/** Simulated bug summary data for dashboard. Replace with fetch call for real backend API integration in production. */
const fakeSummary = {
  open: 8,
  resolved: 15,
  myOpen: 2,
  critical: 3,
  total: 23,
};

const fakeRecentBugs = [
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

export default function DashboardPage() {
  // Placeholders for fetched summary and bugs
  const [summary] = useState(fakeSummary);
  const [recentBugs] = useState(fakeRecentBugs);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 p-8 bg-surface">
            <h1 className="text-2xl font-bold text-primary mb-7">Dashboard Overview</h1>
            <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-9">
              <div className="bg-white rounded shadow p-5 border-l-4 border-primary">
                <div className="text-muted">Total Bugs</div>
                <div className="text-2xl font-bold">{summary.total}</div>
              </div>
              <div className="bg-white rounded shadow p-5 border-l-4 border-accent">
                <div className="text-muted">Open</div>
                <div className="text-2xl font-bold">{summary.open}</div>
              </div>
              <div className="bg-white rounded shadow p-5 border-l-4 border-secondary">
                <div className="text-muted">Resolved</div>
                <div className="text-2xl font-bold">{summary.resolved}</div>
              </div>
              <div className="bg-white rounded shadow p-5 border-l-4 border-red-600">
                <div className="text-muted">Critical Open</div>
                <div className="text-2xl font-bold">{summary.critical}</div>
              </div>
            </section>
            <section>
              <h2 className="font-semibold text-lg text-secondary mb-3">Recent Bugs</h2>
              <div>
                {recentBugs.map(bug => (
                  <BugCard key={bug.id} {...bug} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
