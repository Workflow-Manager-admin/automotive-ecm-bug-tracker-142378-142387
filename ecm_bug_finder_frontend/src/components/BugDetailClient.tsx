"use client";

import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

type Comment = { user: string; date: string; content: string };
type Bug = {
  id: string;
  title: string;
  status: string;
  severity: string;
  module: string;
  created_at: string;
  short_description: string;
  description: string;
  reporter: string;
  comments: Comment[];
};

export default function BugDetailClient({ bug }: { bug: Bug }) {
  const router = useRouter();

  if (!bug) return <div>Loading...</div>;

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 p-8 bg-surface">
            <button
              onClick={() => router.back()}
              className="mb-5 text-sm text-secondary hover:underline"
            >
              &larr; Back to list
            </button>
            <h1 className="text-2xl font-bold text-primary mb-2">{bug.title}</h1>
            <div className="mb-3 flex flex-wrap items-center gap-4">
              <span className="bg-accent text-white px-3 py-1 rounded text-xs font-semibold">{bug.severity}</span>
              <span className="bg-secondary/90 text-white px-2 py-1 rounded text-xs font-medium">{bug.module}</span>
              <span className="text-xs text-muted">{new Date(bug.created_at).toLocaleString()}</span>
              <span className="ml-auto text-xs text-muted">
                Reported by <span className="font-bold">{bug.reporter}</span>
              </span>
            </div>
            <div className="bg-white shadow rounded p-6 border mb-6">
              <div className="font-medium mb-1 text-primary">Bug Description</div>
              <div className="whitespace-pre-line text-sm">{bug.description}</div>
            </div>
            <div className="bg-white shadow rounded p-4 border mb-6">
              <div className="font-medium text-secondary mb-2">Comments</div>
              <ul>
                {bug.comments.map((c, idx) => (
                  <li key={idx} className="mb-2 text-sm">
                    <span className="font-semibold">{c.user}</span> <span className="text-muted">[{new Date(c.date).toLocaleString()}]</span>:<br />
                    {c.content}
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
