import Link from "next/link";

type BugCardProps = {
  id: string;
  title: string;
  status: string;
  severity: string;
  module: string;
  created_at: string;
  short_description: string;
};

const statusColor = (status: string) =>
  status === "Open"
    ? "text-accent"
    : status === "Resolved"
    ? "text-primary"
    : "text-muted";

const badgeColor = (severity: string) =>
  severity === "Critical"
    ? "bg-red-600 text-white"
    : severity === "High"
    ? "bg-accent text-white"
    : severity === "Medium"
    ? "bg-primary/60 text-white"
    : "bg-muted/20 text-muted";

export default function BugCard({
  id,
  title,
  status,
  severity,
  module,
  created_at,
  short_description,
}: BugCardProps) {
  return (
    <Link
      href={`/bugs/${id}`}
      className="block border rounded-lg p-4 transition shadow hover:shadow-md bg-surface mb-3"
    >
      <div className="flex items-center gap-2 text-xs mb-1">
        <span className={`px-2 py-1 rounded font-semibold ${badgeColor(severity)}`}>
          {severity}
        </span>
        <span className="text-muted">in {module}</span>
        <span className="ml-auto">{new Date(created_at).toLocaleDateString()}</span>
      </div>
      <div className="font-semibold text-lg mb-1">{title}</div>
      <div className="text-sm text-muted mb-2">{short_description}</div>
      <div className={`font-semibold ${statusColor(status)}`}>{status}</div>
    </Link>
  );
}
