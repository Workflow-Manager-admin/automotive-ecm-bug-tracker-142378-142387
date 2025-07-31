"use client";

import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

const fakeBug = {
  id: "123",
  title: "Engine misfire DTC not detected",
  status: "Open",
  severity: "Critical",
  module: "PCM",
  created_at: new Date().toISOString(),
  short_description: "After updating the ECM, DTCs for P0300 are not logged...",
  description:
    "After updating the ECM with the latest firmware, Diagnostic Trouble Codes (DTCs) for random misfire (P0300) are never logged, even during clear failure conditions.\n\n**Steps to reproduce:**\n1. Update ECM software to v3.2.4\n2. Disconnect ignition coil to simulate misfire\n3. Observe no DTC or MIL (Malfunction Indicator Lamp) triggered on dashboard.\n\n**Expected Behavior:** DTC P0300 should be stored, MIL lamp turns on.\n**Actual Behavior:** No code, no lamp.\n\n*Impact*: Could cause field warranty issues and unreported driveability complaints.",
  reporter: "alice@ecm.com",
  comments: [
    {
      user: "bob@ecm.com",
      date: new Date().toISOString(),
      content: "Can reproduce on 2019 PCM (Ford Focus)."
    },
    {
      user: "eve@ecm.com",
      date: new Date().toISOString(),
      content: "Likely related to new OBD monitor strategy."
    }
  ]
};

import BugDetailClient from "@/components/BugDetailClient";

// This is required for Next.js static export on dynamic routes (see output: export in next.config.ts)
export async function generateStaticParams() {
  // Provide at least one id for the build; in a real app, you'd fetch all possible IDs.
  return [{ id: "123" }];
}

// Fake bug data - in real use, you'd fetch by params.id
const fakeBug = {
  id: "123",
  title: "Engine misfire DTC not detected",
  status: "Open",
  severity: "Critical",
  module: "PCM",
  created_at: new Date().toISOString(),
  short_description: "After updating the ECM, DTCs for P0300 are not logged...",
  description:
    "After updating the ECM with the latest firmware, Diagnostic Trouble Codes (DTCs) for random misfire (P0300) are never logged, even during clear failure conditions.\n\n**Steps to reproduce:**\n1. Update ECM software to v3.2.4\n2. Disconnect ignition coil to simulate misfire\n3. Observe no DTC or MIL (Malfunction Indicator Lamp) triggered on dashboard.\n\n**Expected Behavior:** DTC P0300 should be stored, MIL lamp turns on.\n**Actual Behavior:** No code, no lamp.\n\n*Impact*: Could cause field warranty issues and unreported driveability complaints.",
  reporter: "alice@ecm.com",
  comments: [
    {
      user: "bob@ecm.com",
      date: new Date().toISOString(),
      content: "Can reproduce on 2019 PCM (Ford Focus)."
    },
    {
      user: "eve@ecm.com",
      date: new Date().toISOString(),
      content: "Likely related to new OBD monitor strategy."
    }
  ]
};

export default function BugDetailPage() {
  // Here you'd get the id from params and fetch from backend
  return <BugDetailClient bug={fakeBug} />;
}
