import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, TrendingUp, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "1,234",
    change: "+12%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Active Leads",
    value: "89",
    change: "+8%",
    icon: Target,
    trend: "up"
  },
  {
    title: "Conversion Rate",
    value: "24.5%",
    change: "+2.1%",
    icon: TrendingUp,
    trend: "up"
  },
  {
    title: "Total Revenue",
    value: "$54,231",
    change: "+15%",
    icon: DollarSign,
    trend: "up"
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-success">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}