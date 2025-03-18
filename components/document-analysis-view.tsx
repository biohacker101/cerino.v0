"use client"

import { useState } from "react"
import { Calendar, Check, FileText, List, Table } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DocumentAnalysisView() {
  const [selectedDocument, setSelectedDocument] = useState("PROTOCOL-2025-001-v1.2.pdf")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">{selectedDocument}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <List className="mr-2 h-4 w-4" />
            View Original
          </Button>
          <Button size="sm">
            <Check className="mr-2 h-4 w-4" />
            Approve Analysis
          </Button>
        </div>
      </div>

      <Tabs defaultValue="timeline">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="timeline">
            <Calendar className="mr-2 h-4 w-4" />
            Timeline
          </TabsTrigger>
          <TabsTrigger value="visits">
            <Table className="mr-2 h-4 w-4" />
            Visit Schedule
          </TabsTrigger>
          <TabsTrigger value="procedures">
            <List className="mr-2 h-4 w-4" />
            Procedures
          </TabsTrigger>
          <TabsTrigger value="filing">
            <FileText className="mr-2 h-4 w-4" />
            Filing Instructions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="timeline" className="border-none p-0 pt-4">
          <div className="rounded-lg border p-4">
            <h4 className="mb-4 text-sm font-medium">Study Timeline (Auto-Generated)</h4>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-border" />

              {/* Timeline events */}
              <div className="space-y-6">
                <div className="relative pl-6">
                  <div className="absolute left-[-4px] top-0 h-3 w-3 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-medium">Study Initiation</h5>
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                        Milestone
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">March 15, 2025</p>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-[-4px] top-0 h-3 w-3 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-medium">First Patient First Visit</h5>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
                        Patient Visit
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">April 1, 2025</p>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-[-4px] top-0 h-3 w-3 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-medium">Interim Analysis</h5>
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-600">
                        Analysis
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">July 15, 2025</p>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-[-4px] top-0 h-3 w-3 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-medium">Last Patient Last Visit</h5>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
                        Patient Visit
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">December 15, 2025</p>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-[-4px] top-0 h-3 w-3 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-medium">Final Report</h5>
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                        Milestone
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">January 31, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="visits" className="border-none p-0 pt-4">
          <div className="rounded-lg border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle font-medium">Visit</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Timeline</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Procedures</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Window</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">Screening</td>
                    <td className="p-4 align-middle">Day -14 to -1</td>
                    <td className="p-4 align-middle">Informed Consent, Medical History, Vital Signs</td>
                    <td className="p-4 align-middle">±0 days</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">Baseline</td>
                    <td className="p-4 align-middle">Day 1</td>
                    <td className="p-4 align-middle">Physical Exam, Lab Tests, First Dose</td>
                    <td className="p-4 align-middle">±0 days</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">Visit 1</td>
                    <td className="p-4 align-middle">Week 2</td>
                    <td className="p-4 align-middle">Vital Signs, Adverse Events, Medication Review</td>
                    <td className="p-4 align-middle">±3 days</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">Visit 2</td>
                    <td className="p-4 align-middle">Week 4</td>
                    <td className="p-4 align-middle">Physical Exam, Lab Tests, Efficacy Assessment</td>
                    <td className="p-4 align-middle">±3 days</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">End of Study</td>
                    <td className="p-4 align-middle">Week 12</td>
                    <td className="p-4 align-middle">Physical Exam, Lab Tests, Final Assessment</td>
                    <td className="p-4 align-middle">±5 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

