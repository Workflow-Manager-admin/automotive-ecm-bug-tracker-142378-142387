"use client";

import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import ProtectedRoute from "@/components/ProtectedRoute";
import BugCard from "@/components/BugCard";

// Sample data for bug list; replace with backend call in future
const bugs = [
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

export default function BugsListPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 p-8 bg-surface">
            <h1 className="text-2xl font-bold text-primary mb-6">All Bugs</h1>
            <div>
              {bugs.map(bug => (
                <BugCard key={bug.id} {...bug} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
