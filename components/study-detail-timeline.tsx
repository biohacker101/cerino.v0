"use client"

import { useState } from "react"
import { Calendar, Clock, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"

export function StudyDetailTimeline() {
  const [currentView, setCurrentView] = useState("all")

  const milestones = [
    {
      id: 1,
      title: "Protocol Approval",
      date: "January 15, 2025",
      status: "completed",
      description: "Protocol approved by regulatory authorities",
      type: "regulatory",
    },
    {
      id: 2,
      title: "Site Initiation",
      date: "March 15, 2025",
      status: "upcoming",
      description: "Initiation of all study sites",
      type: "milestone",
    },
    {
      id: 3,
      title: "First Patient First Visit",
      date: "April 1, 2025",
      status: "upcoming",
      description: "First patient enrolled and screened",
      type: "patient",
    },
    {
      id: 4,
      title: "25% Enrollment",
      date: "May 15, 2025",
      status: "upcoming",
      description: "25% of target enrollment reached",
      type: "milestone",
    },
    {
      id: 5,
      title: "Interim Analysis",
      date: "July 15, 2025",
      status: "upcoming",
      description: "Planned interim analysis of study data",
      type: "analysis",
    },
    {
      id: 6,
      title: "75% Enrollment",
      date: "September 30, 2025",
      status: "upcoming",
      description: "75% of target enrollment reached",
      type: "milestone",
    },
    {
      id: 7,
      title: "Last Patient First Visit",
      date: "October 15, 2025",
      status: "upcoming",
      description: "Last patient enrolled in the study",
      type: "patient",
    },
    {
      id: 8,
      title: "Last Patient Last Visit",
      date: "December 15, 2025",
      status: "upcoming",
      description: "Last patient completes final study visit",
      type: "patient",
    },
    {
      id: 9,
      title: "Database Lock",
      date: "January 15, 2026",
      status: "upcoming",
      description: "Study database locked for final analysis",
      type: "analysis",
    },
    {
      id: 10,
      title: "Final Report",
      date: "January 31, 2026",
      status: "upcoming",
      description: "Final clinical study report completed",
      type: "regulatory",
    },
  ]

  const filteredMilestones =
    currentView === "all" ? milestones : milestones.filter((milestone) => milestone.type === currentView)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant={currentView === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentView("all")}
          >
            All
          </Button>
          <Button
            variant={currentView === "milestone" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentView("milestone")}
          >
            Milestones
          </Button>
          <Button
            variant={currentView === "patient" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentView("patient")}
          >
            Patient Visits
          </Button>
          <Button
            variant={currentView === "regulatory" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentView("regulatory")}
          >
            Regulatory
          </Button>
          <Button
            variant={currentView === "analysis" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentView("analysis")}
          >
            Analysis
          </Button>
        </div>
      </div>

      <div className="relative space-y-2">
        {/* Timeline line */}
        <div className="absolute left-16 top-0 h-full w-0.5 bg-border" />

        {/* Timeline events */}
        {filteredMilestones.map((milestone) => (
          <div key={milestone.id} className="relative flex items-start gap-4 rounded-lg p-2 hover:bg-muted/50">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                milestone.status === "completed" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
              }`}
            >
              {milestone.type === "milestone" && <Calendar className="h-4 w-4" />}
              {milestone.type === "patient" && <FileText className="h-4 w-4" />}
              {milestone.type === "regulatory" && <FileText className="h-4 w-4" />}
              {milestone.type === "analysis" && <FileText className="h-4 w-4" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-medium">{milestone.title}</h4>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    milestone.status === "completed" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {milestone.status === "completed" ? "Completed" : "Upcoming"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{milestone.description}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {milestone.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

