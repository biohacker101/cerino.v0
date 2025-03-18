import type { Metadata } from "next"
import { Calendar, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { EnrollmentTrendChart } from "@/components/enrollment-trend-chart"
import { SitePerformanceChart } from "@/components/site-performance-chart"
import { AdverseEventAnalyticsChart } from "@/components/adverse-event-analytics-chart"
import { DocumentProcessingAnalyticsChart } from "@/components/document-processing-analytics-chart"

export const metadata: Metadata = {
  title: "Analytics - ClinicalAI Navigator",
  description: "Study analytics and reporting",
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Studies</SelectItem>
                <SelectItem value="PROTOCOL-2025-001">PROTOCOL-2025-001</SelectItem>
                <SelectItem value="PROTOCOL-2024-003">PROTOCOL-2024-003</SelectItem>
                <SelectItem value="PROTOCOL-2024-005">PROTOCOL-2024-005</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2 rounded-md border px-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Last 30 days</span>
            </div>
          </div>
        </div>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78 / 250</div>
                <div className="flex items-center">
                  <span className="text-xs text-green-600">+12 from last month</span>
                  <span className="ml-2 text-xs text-muted-foreground">(31.2% of target)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Enrollment Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.9 patients/week</div>
                <div className="flex items-center">
                  <span className="text-xs text-green-600">+0.7 from last month</span>
                  <span className="ml-2 text-xs text-muted-foreground">(Target: 4.2)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Protocol Deviations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14</div>
                <div className="flex items-center">
                  <span className="text-xs text-red-600">+3 from last month</span>
                  <span className="ml-2 text-xs text-muted-foreground">(5.6% of visits)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Document Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.2%</div>
                <div className="flex items-center">
                  <span className="text-xs text-green-600">+1.5% from last month</span>
                  <span className="ml-2 text-xs text-muted-foreground">(Target: 95%)</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Enrollment Trend</CardTitle>
                <CardDescription>Patient enrollment over time across all studies</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <EnrollmentTrendChart />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Site Performance</CardTitle>
                <CardDescription>Enrollment performance by site</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <SitePerformanceChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Adverse Events</CardTitle>
                <CardDescription>Adverse events by type and severity</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <AdverseEventAnalyticsChart />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Document Processing</CardTitle>
                <CardDescription>Document processing efficiency over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <DocumentProcessingAnalyticsChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

