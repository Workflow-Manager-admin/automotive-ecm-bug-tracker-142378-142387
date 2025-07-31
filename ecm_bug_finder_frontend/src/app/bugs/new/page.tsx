"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import ProtectedRoute from "@/components/ProtectedRoute";

const modules = ["PCM", "TCM", "ECM", "BCM", "ABS", "SRS", "Other"];

export default function BugReportPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [module, setModule] = useState(modules[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Thank you! Your bug report has been submitted.");
    setTitle(""); setDescription(""); setSeverity("Medium"); setModule(modules[0]);
    // Submit logic (replace with real API call)
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 p-8 bg-surface">
            <h1 className="text-2xl font-bold text-primary mb-6">Report a Bug</h1>
            <form onSubmit={handleSubmit} className="bg-white p-7 rounded-lg shadow max-w-lg border">
              <div className="mb-4">
                <label className="block mb-1 font-medium">Title</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                  maxLength={120}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                  maxLength={1000}
                  rows={6}
                  placeholder="Describe the bug details, steps to reproduce, DTCs, etc."
                />
              </div>
              <div className="mb-4 flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Severity</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    value={severity}
                    onChange={e => setSeverity(e.target.value)}
                  >
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Module</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    value={module}
                    onChange={e => setModule(e.target.value)}
                  >
                    {modules.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-bold px-4 py-2 rounded transition"
              >
                Submit Bug
              </button>
              {message && <div className="mt-3 text-primary">{message}</div>}
            </form>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
