import type { Metadata } from "next"
import { Filter, Search, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DocumentUploader } from "@/components/document-uploader"
import { DocumentList } from "@/components/document-list"
import { DocumentAnalysisView } from "@/components/document-analysis-view"

export const metadata: Metadata = {
  title: "Documents - ClinicalAI Navigator",
  description: "Document ingestion and intelligent analysis",
}

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Documents
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="protocols">Protocols</TabsTrigger>
            <TabsTrigger value="manuals">Study Manuals</TabsTrigger>
            <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
            <TabsTrigger value="tmf">TMF Indices</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search documents..." className="w-[200px] pl-8 md:w-[300px]" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Upload Documents</CardTitle>
                <CardDescription>
                  Upload clinical protocols, study manuals, regulatory guidelines, and TMF indices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DocumentUploader />
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Recent Uploads</CardTitle>
                <CardDescription>Recently uploaded documents pending analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <DocumentList />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Documents
                </Button>
              </CardFooter>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Document Analysis</CardTitle>
              <CardDescription>Intelligent analysis of clinical documents using NLP</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentAnalysisView />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

