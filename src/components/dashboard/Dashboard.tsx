import { StatsCards } from "./StatsCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Target } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your CRM today.
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Customers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Recent Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Acme Corporation", email: "contact@acme.com", status: "Active" },
                { name: "TechStart Inc", email: "hello@techstart.com", status: "Prospect" },
                { name: "Global Solutions", email: "info@globalsol.com", status: "Active" }
              ].map((customer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{customer.name}</p>
                    <p className="text-xs text-muted-foreground">{customer.email}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    customer.status === "Active" 
                      ? "bg-success/10 text-success" 
                      : "bg-warning/10 text-warning"
                  }`}>
                    {customer.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Leads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5 text-primary" />
              Active Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Website Redesign", value: "$15,000", status: "New" },
                { title: "Mobile App Dev", value: "$25,000", status: "Contacted" },
                { title: "Cloud Migration", value: "$50,000", status: "Converted" }
              ].map((lead, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{lead.title}</p>
                    <p className="text-xs text-muted-foreground">{lead.value}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    lead.status === "New" ? "bg-blue-100 text-blue-800" :
                    lead.status === "Contacted" ? "bg-yellow-100 text-yellow-800" :
                    "bg-green-100 text-green-800"
                  }`}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New customer added", item: "Acme Corporation", time: "2 hours ago", type: "customer" },
              { action: "Lead status updated", item: "Website Redesign Project", time: "4 hours ago", type: "lead" },
              { action: "Customer contacted", item: "TechStart Inc", time: "6 hours ago", type: "contact" }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === "customer" ? "bg-primary" :
                  activity.type === "lead" ? "bg-success" :
                  "bg-warning"
                }`} />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.action}:</span> {activity.item}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}