import { TopBar } from "@/components/ui/topbar";
import { SideNav } from "@/components/ui/sidenav";
import { PolicyCard } from "@/components/ui/policy-card";
import { Timeline } from "@/components/ui/timeline";
import { ActionPanel } from "@/components/ui/action-panel";
import { AlertBanner } from "@/components/ui/alert-banner";

export default async function PolicyDetailPage() {
  // Simulated policies and events
  const policies = [
    {
      title: "Finance Access Policy",
      description: "Restricts access to finance data to users in 'Finance' group only.",
      tags: ["finance", "access", "critical"],
      status: "active" as const,
    },
    {
      title: "External Sharing",
      description: "Prevents sharing of sensitive data outside the organization.",
      tags: ["security", "sharing"],
      status: "inactive" as const,
    },
    {
      title: "MFA Enforcement",
      description: "Requires multi-factor authentication for all admin actions.",
      tags: ["mfa", "security"],
      status: "pending" as const,
    },
  ];

  const policyEvents = [
    {
      title: "Policy Updated",
      description: "Finance Access Policy now includes contractors.",
      time: "Today, 9:40",
      color: "#2563eb",
    },
    {
      title: "Policy Created",
      description: "External Sharing policy added.",
      time: "Yesterday, 15:02",
      color: "#f59e42",
    },
    {
      title: "MFA Enforcement started",
      description: "All admins must use MFA.",
      time: "2 days ago",
      color: "#22c55e",
    },
  ];

  return (
    <>
      <TopBar />
      <SideNav />
      <main className="lg:pl-56 pt-16 min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="font-heading text-3xl font-bold tracking-tight">Policy Details</h1>
            <AlertBanner
              message="Remember to review policy changes before publishing."
              variant="warning"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {policies.map((policy, idx) => (
              <PolicyCard key={idx} {...policy} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">Policy Change Log</h2>
              <Timeline events={policyEvents} />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">Quick Actions</h2>
              <ActionPanel
                title="Manage Policies"
                actions={[
                  {
                    label: "Add Policy",
                    onClick: () => window.alert("Add Policy action"),
                    icon: (
                      <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 3v12M3 9h12" />
                      </svg>
                    ),
                  },
                  {
                    label: "Export",
                    onClick: () => window.alert("Export action"),
                  },
                  {
                    label: "Audit Log",
                    onClick: () => window.alert("Audit Log action"),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
