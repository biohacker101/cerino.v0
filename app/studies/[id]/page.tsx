import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  FileText,
  MessageSquare,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StudyDetailTimeline } from "@/components/study-detail-timeline"
import { StudyDocumentList } from "@/components/study-document-list"
import { StudyPatientTable } from "@/components/study-patient-table"
import { StudySiteTable } from "@/components/study-site-table"

export const metadata: Metadata = {
  title: "Study Details - ClinicalAI Navigator",
  description: "Detailed view of clinical study",
}

export default function StudyDetailPage({ params }: { params: { id: string } }) {
  const studyId = params.id

  // This would normally be fetched from an API based on the ID
  const study = {
    id: studyId,
    title: "A Phase 3 Study of Drug X in Patients with Condition Y",
    phase: "Phase 3",
    status: "Active",
    startDate: "March 15, 2025",
    endDate: "December 31, 2025",
    sponsor: "Pharma Corporation",
    principalInvestigator: "Dr. Jane Doe",
    sites: 12,
    enrollmentTarget: 250,
    enrollmentCurrent: 78,
    lastUpdated: "March 10, 2025",
    description:
      "This is a randomized, double-blind, placebo-controlled study to evaluate the efficacy and safety of Drug X in patients with Condition Y. The study will enroll approximately 250 patients across 12 sites.",
  }

  return (
    <DashboardLayout>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/studies">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{study.id}</h2>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">{study.title}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Badge>{study.status}</Badge>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader>
            <CardTitle>Study Overview</CardTitle>
            <CardDescription>Key information and progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Phase</div>
                <div className="text-lg font-medium">{study.phase}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Sponsor</div>
                <div className="text-lg font-medium">{study.sponsor}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Principal Investigator</div>
                <div className="text-lg font-medium">{study.principalInvestigator}</div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-2 text-lg font-medium">Study Description</h3>
              <p className="text-muted-foreground">{study.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-lg font-medium">Enrollment Progress</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    {study.enrollmentCurrent} of {study.enrollmentTarget} patients enrolled
                  </span>
                  <span className="text-sm font-medium">
                    {Math.round((study.enrollmentCurrent / study.enrollmentTarget) * 100)}%
                  </span>
                </div>
                <Progress value={(study.enrollmentCurrent / study.enrollmentTarget) * 100} />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Sites</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">{study.sites}</div>
                  <p className="text-xs text-muted-foreground">10 active, 2 pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Documents</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Last updated 2 days ago</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Adverse Events</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">1 requires attention</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Timeline</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">9 mo</div>
                  <p className="text-xs text-muted-foreground">Mar - Dec 2025</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" asChild>
              <Link href={`/chat?study=${studyId}`}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with Study Buddy
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href={`/documents?study=${studyId}`}>
                <FileText className="mr-2 h-4 w-4" />
                View Documents
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href={`/calendar?study=${studyId}`}>
                <Calendar className="mr-2 h-4 w-4" />
                View Calendar
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Study Data
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-start border-t px-6 py-4">
            <div className="space-y-1">
              <div className="text-sm font-medium">Last Updated</div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {study.lastUpdated}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="timeline" className="mt-6">
        <TabsList>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="sites">Sites</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Study Timeline</CardTitle>
              <CardDescription>Key milestones and events for {study.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <StudyDetailTimeline />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sites" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Study Sites</CardTitle>
              <CardDescription>All sites participating in {study.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <StudySiteTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="patients" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Patients</CardTitle>
              <CardDescription>Patients enrolled in {study.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <StudyPatientTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Study Documents</CardTitle>
              <CardDescription>All documents related to {study.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <StudyDocumentList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

