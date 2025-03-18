import type { Metadata } from "next"
import { AlertCircle, Clock, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AdverseEventTable } from "@/components/adverse-event-table"
import { AdverseEventWorkflow } from "@/components/adverse-event-workflow"

export const metadata: Metadata = {
  title: "Adverse Events - ClinicalAI Navigator",
  description: "Automated adverse event management",
}

export default function EventsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Adverse Events</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Report New Event
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="open">
              Open
              <span className="ml-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">4</span>
            </TabsTrigger>
            <TabsTrigger value="inProgress">In Progress</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="w-[200px] pl-8 md:w-[300px]" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-red-600" />
                  <CardTitle className="text-red-600">Urgent Attention Required</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600">
                  1 serious adverse event requires immediate reporting within the next 24 hours.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full">
                  View Urgent Event
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Events</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">1 serious, 3 non-serious</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Resolution Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2 days</div>
                <p className="text-xs text-muted-foreground">-0.5 days from previous month</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Adverse Events</CardTitle>
              <CardDescription>Manage and track all adverse events across studies</CardDescription>
            </CardHeader>
            <CardContent>
              <AdverseEventTable />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Event Reporting Workflow</CardTitle>
              <CardDescription>Guided workflow for reporting and managing adverse events</CardDescription>
            </CardHeader>
            <CardContent>
              <AdverseEventWorkflow />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

