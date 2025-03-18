import type { Metadata } from "next"
import { Calendar, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StudyTable } from "@/components/study-table"
import { StudyGanttChart } from "@/components/study-gantt-chart"

export const metadata: Metadata = {
  title: "Studies - ClinicalAI Navigator",
  description: "Dynamic project management for clinical studies",
}

export default function StudiesPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Studies</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Study
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Studies</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search studies..." className="w-[200px] pl-8 md:w-[300px]" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Study Overview</CardTitle>
              <CardDescription>Manage and track all clinical studies</CardDescription>
            </CardHeader>
            <CardContent>
              <StudyTable />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Study Timeline</CardTitle>
              <CardDescription>Visual overview of study milestones and schedules</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <StudyGanttChart />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Milestones</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 pt-2">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">PROTOCOL-2025-001: Site Initiation</p>
                      <p className="text-xs text-muted-foreground">March 15, 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">PROTOCOL-2024-003: Regulatory Submission</p>
                      <p className="text-xs text-muted-foreground">March 18, 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">PROTOCOL-2024-005: Final Patient Visit</p>
                      <p className="text-xs text-muted-foreground">March 22, 2025</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Statistics</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Total Studies</p>
                    <p className="text-2xl font-bold">18</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Active Studies</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Pending Approval</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

