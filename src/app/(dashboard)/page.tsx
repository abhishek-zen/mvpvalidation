import { TopBar } from "@/components/ui/topbar";
import { SideNav } from "@/components/ui/sidenav";
import { MetricWidget } from "@/components/ui/metric-widget";
import { Timeline } from "@/components/ui/timeline";
import { AlertBanner } from "@/components/ui/alert-banner";
import { CoverageChart } from "@/components/ui/coverage-chart";
import { InsightPanel } from "@/components/ui/insight-panel";

export default async function DashboardPage() {
  // Simulated data
  const metrics = [
    { label: "Active Policies", value: 12, icon: "📄", trend: "+2%", trendDirection: "up" },
    { label: "Risk Score", value: 84, icon: "🛡️", trend: "-3%", trendDirection: "down" },
    { label: "Coverage", value: "97%", icon: "✅", trend: "+1%", trendDirection: "up" },
  ];

  const timelineEvents = [
    {
      title: "Policy Created",
      description: "New access policy for Finance group.",
      time: "09:15",
      color: "#2563eb",
      icon: (
        <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="2" y="2" width="12" height="12" rx="3" />
        </svg>
      ),
    },
    {
      title: "User Added",
      description: "Emma Carter joined Admin role.",
      time: "10:32",
      color: "#f59e42",
      icon: (
        <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="8" cy="8" r="6" />
          <path d="M8 10c1.5 0 3 1 3 2v1H5v-1c0-1 1.5-2 3-2z" />
        </svg>
      ),
    },
    {
      title: "Policy Review",
      description: "Quarterly policy review triggered.",
      time: "11:05",
      color: "#22c55e",
      icon: (
        <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M8 3v5l4 2" />
          <circle cx="8" cy="8" r="7" />
        </svg>
      ),
    },
  ];

  const chartData = [
    { date: "Mon", value: 80 },
    { date: "Tue", value: 85 },
    { date: "Wed", value: 88 },
    { date: "Thu", value: 92 },
    { date: "Fri", value: 97 },
    { date: "Sat", value: 96 },
    { date: "Sun", value: 97 },
  ];

  return (
    <>
      <TopBar />
      <SideNav />
      <main className="lg:pl-56 pt-16 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="font-heading text-3xl font-bold tracking-tight">Dashboard Overview</h1>
            <AlertBanner
              message="Your coverage has increased by 1% this week! 🎉"
              variant="success"
              className="w-full md:w-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {metrics.map((metric, i) => (
              <MetricWidget key={i} {...metric} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">Recent Activity</h2>
              <Timeline events={timelineEvents} />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">Coverage Trend</h2>
              <CoverageChart data={chartData} color="#2563eb" />
            </div>
          </div>
          <section id="insights" className="mb-8">
            <h2 className="font-heading text-xl font-semibold mb-4">AI Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InsightPanel
                insight="Policy coverage is above industry average. Consider reviewing inactive policies for optimization."
                author="AI Copilot"
                date="Today"
              />
              <InsightPanel
                insight="Detected an unusual spike in policy edits on Thursday."
                author="AI Copilot"
                date="This week"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
