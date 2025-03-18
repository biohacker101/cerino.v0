"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Clock, FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export function StudyTimeline() {
  const [currentMonth, setCurrentMonth] = useState(2) // March

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))
  }

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="text-lg font-medium">{months[currentMonth]} 2025</h3>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-xs">Milestones</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-xs">Patient Visits</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="text-xs">Regulatory</span>
          </div>
        </div>
      </div>

      <div className="relative space-y-2">
        {/* Timeline line */}
        <div className="absolute left-16 top-0 h-full w-0.5 bg-border" />

        {/* Timeline events */}
        <div className="relative flex items-start gap-4 rounded-lg p-2 hover:bg-muted/50">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Calendar className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium">Site Initiation Visit</h4>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">Milestone</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Mar 15, 2025
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                PROTOCOL-2025-001
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex items-start gap-4 rounded-lg p-2 hover:bg-muted/50">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Users className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium">Patient Screening Window</h4>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
                Patient Visit
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Mar 18-25, 2025
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                PROTOCOL-2024-003
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex items-start gap-4 rounded-lg p-2 hover:bg-muted/50">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <FileText className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium">Regulatory Submission Deadline</h4>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-600">
                Regulatory
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Mar 22, 2025
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                PROTOCOL-2024-005
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

