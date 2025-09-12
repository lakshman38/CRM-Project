import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, DollarSign, Calendar } from "lucide-react";

// Mock data - will be replaced with Supabase data
const mockLeads = [
  {
    id: 1,
    title: "Website Redesign Project",
    description: "Complete website overhaul for Acme Corp",
    status: "New",
    value: 15000,
    customer: "Acme Corporation",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "iOS and Android app for TechStart",
    status: "Contacted",
    value: 25000,
    customer: "TechStart Inc",
    createdAt: "2024-01-20"
  },
  {
    id: 3,
    title: "Cloud Migration",
    description: "Move infrastructure to AWS",
    status: "Converted",
    value: 50000,
    customer: "Global Solutions",
    createdAt: "2024-01-10"
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "6-month SEO campaign",
    status: "Lost",
    value: 8000,
    customer: "Local Business",
    createdAt: "2024-01-05"
  }
];

const statusColumns = [
  { id: "New", title: "New Leads", color: "bg-blue-500" },
  { id: "Contacted", title: "Contacted", color: "bg-yellow-500" },
  { id: "Converted", title: "Converted", color: "bg-green-500" },
  { id: "Lost", title: "Lost", color: "bg-red-500" }
];

export function LeadsKanban() {
  const [leads] = useState(mockLeads);

  const getLeadsByStatus = (status: string) => {
    return leads.filter(lead => lead.status === status);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Contacted": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Converted": return "bg-green-100 text-green-800 border-green-200";
      case "Lost": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Leads Pipeline</h2>
          <p className="text-muted-foreground">Track and manage your sales opportunities</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusColumns.map((column) => (
          <div key={column.id} className="space-y-4">
            {/* Column Header */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{column.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {getLeadsByStatus(column.id).length}
                  </Badge>
                </div>
                <div className={`h-1 rounded-full ${column.color}`} />
              </CardHeader>
            </Card>

            {/* Column Content */}
            <div className="space-y-3">
              {getLeadsByStatus(column.id).map((lead) => (
                <Card key={lead.id} className="cursor-pointer transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm">{lead.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {lead.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <DollarSign className="h-3 w-3 mr-1" />
                          ${lead.value.toLocaleString()}
                        </div>
                        
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {lead.createdAt}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground">
                          {lead.customer}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getStatusColor(lead.status)}`}
                        >
                          {lead.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Add New Lead Button */}
              <Button 
                variant="ghost" 
                className="w-full h-20 border-2 border-dashed border-muted-foreground/25 hover:border-primary hover:bg-primary/5"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Lead
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}