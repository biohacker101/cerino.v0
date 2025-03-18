"use client"

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StudySelectorProps {
  selectedStudy: string
  onSelectStudy: (studyId: string) => void
}

export function StudySelector({ selectedStudy, onSelectStudy }: StudySelectorProps) {
  const studies = [
    {
      id: "PROTOCOL-2025-001",
      title: "A Phase 3 Study of Drug X",
    },
    {
      id: "PROTOCOL-2024-003",
      title: "A Phase 2 Study of Drug Z",
    },
    {
      id: "PROTOCOL-2024-005",
      title: "A Phase 1 Study of Drug Y",
    },
    {
      id: "PROTOCOL-2024-008",
      title: "A Phase 3 Study of Drug A",
    },
    {
      id: "PROTOCOL-2024-010",
      title: "A Phase 2 Study of Drug B",
    },
  ]

  return (
    <div className="space-y-2">
      {studies.map((study) => (
        <Button
          key={study.id}
          variant={selectedStudy === study.id ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => onSelectStudy(study.id)}
        >
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="text-sm truncate">{study.id}</span>
          </div>
        </Button>
      ))}
    </div>
  )
}

