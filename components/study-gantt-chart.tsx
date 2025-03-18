"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StudyGanttChart() {
  const [currentYear, setCurrentYear] = useState(2025)
  const [selectedStudy, setSelectedStudy] = useState("all")

  const prevYear = () => {
    setCurrentYear((prev) => prev - 1)
  }

  const nextYear = () => {
    setCurrentYear((prev) => prev + 1)
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const studies = [
    {
      id: "PROTOCOL-2025-001",
      title: "A Phase 3 Study of Drug X",
      startMonth: 2, // March
      endMonth: 11, // December
      year: 2025,
      color: "bg-blue-500",
      milestones: [
        { month: 2, label: "Site Initiation" },
        { month: 3, label: "First Patient First Visit" },
        { month: 6, label: "Interim Analysis" },
        { month: 11, label: "Last Patient Last Visit" },
      ],
    },
    {
      id: "PROTOCOL-2024-003",
      title: "A Phase 2 Study of Drug Z",
      startMonth: 0, // January
      endMonth: 9, // October
      year: 2025,
      color: "bg-green-500",
      milestones: [
        { month: 0, label: "Site Initiation" },
        { month: 1, label: "First Patient First Visit" },
        { month: 5, label: "Interim Analysis" },
        { month: 9, label: "Last Patient Last Visit" },
      ],
    },
    {
      id: "PROTOCOL-2024-005",
      title: "A Phase 1 Study of Drug Y",
      startMonth: 1, // February
      endMonth: 5, // June
      year: 2025,
      color: "bg-purple-500",
      milestones: [
        { month: 1, label: "Site Initiation" },
        { month: 2, label: "First Patient First Visit" },
        { month: 5, label: "Last Patient Last Visit" },
      ],
    },
    {
      id: "PROTOCOL-2024-008",
      title: "A Phase 3 Study of Drug A",
      startMonth: 3, // April
      endMonth: 11, // December (continues to next year)
      year: 2025,
      color: "bg-amber-500",
      milestones: [
        { month: 3, label: "Site Initiation" },
        { month: 4, label: "First Patient First Visit" },
        { month: 8, label: "Interim Analysis" },
      ],
    },
    {
      id: "PROTOCOL-2024-010",
      title: "A Phase 2 Study of Drug B",
      startMonth: 4, // May
      endMonth: 10, // November
      year: 2025,
      color: "bg-red-500",
      milestones: [
        { month: 4, label: "Site Initiation" },
        { month: 5, label: "First Patient First Visit" },
        { month: 10, label: "Last Patient Last Visit" },
      ],
    },
  ]

  const filteredStudies = selectedStudy === "all" ? studies : studies.filter((study) => study.id === selectedStudy)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevYear}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="text-lg font-medium">{currentYear}</h3>
          <Button variant="outline" size="icon" onClick={nextYear}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedStudy} onValueChange={setSelectedStudy}>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select study" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Studies</SelectItem>
              {studies.map((study) => (
                <SelectItem key={study.id} value={study.id}>
                  {study.id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        {/* Month headers */}
        <div className="flex border-b">
          <div className="w-[200px] shrink-0 border-r p-2 font-medium">Study</div>
          <div className="flex flex-1">
            {months.map((month, index) => (
              <div key={month} className="flex-1 border-r p-2 text-center text-sm last:border-r-0">
                {month}
              </div>
            ))}
          </div>
        </div>

        {/* Gantt chart rows */}
        {filteredStudies.map((study) => (
          <div key={study.id} className="flex border-b last:border-b-0">
            <div className="w-[200px] shrink-0 border-r p-2">
              <div className="text-sm font-medium">{study.id}</div>
              <div className="text-xs text-muted-foreground">{study.title}</div>
            </div>
            <div className="relative flex flex-1">
              {months.map((month, index) => (
                <div key={month} className="flex-1 border-r p-2 last:border-r-0" />
              ))}

              {/* Study timeline bar */}
              {study.year === currentYear && (
                <div
                  className={`absolute top-1/2 h-6 -translate-y-1/2 rounded-full ${study.color}`}
                  style={{
                    left: `${(study.startMonth / 12) * 100}%`,
                    width: `${((study.endMonth - study.startMonth + 1) / 12) * 100}%`,
                  }}
                />
              )}

              {/* Milestones */}
              {study.year === currentYear &&
                study.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="absolute top-0 z-10"
                    style={{
                      left: `${((milestone.month + 0.5) / 12) * 100}%`,
                    }}
                  >
                    <div className="relative">
                      <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-white border-2 border-primary" />
                      <div className="absolute -left-[60px] top-5 w-[120px] text-center">
                        <span className="text-xs font-medium">{milestone.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

