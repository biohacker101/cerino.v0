import { Calendar } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function StudyTable() {
  const studies = [
    {
      id: "PROTOCOL-2025-001",
      title: "A Phase 3 Study of Drug X in Patients with Condition Y",
      phase: "Phase 3",
      status: "Active",
      sites: 12,
      subjects: 250,
      startDate: "Mar 15, 2025",
      endDate: "Dec 31, 2025",
    },
    {
      id: "PROTOCOL-2024-003",
      title: "A Phase 2 Study of Drug Z in Patients with Condition X",
      phase: "Phase 2",
      status: "Active",
      sites: 8,
      subjects: 120,
      startDate: "Jan 10, 2025",
      endDate: "Oct 15, 2025",
    },
    {
      id: "PROTOCOL-2024-005",
      title: "A Phase 1 Study of Drug Y in Healthy Volunteers",
      phase: "Phase 1",
      status: "Active",
      sites: 3,
      subjects: 45,
      startDate: "Feb 5, 2025",
      endDate: "Jun 30, 2025",
    },
    {
      id: "PROTOCOL-2024-008",
      title: "A Phase 3 Study of Drug A in Patients with Condition B",
      phase: "Phase 3",
      status: "Pending",
      sites: 15,
      subjects: 300,
      startDate: "Apr 1, 2025",
      endDate: "Mar 31, 2026",
    },
    {
      id: "PROTOCOL-2024-010",
      title: "A Phase 2 Study of Drug B in Patients with Condition C",
      phase: "Phase 2",
      status: "Pending",
      sites: 6,
      subjects: 90,
      startDate: "May 15, 2025",
      endDate: "Nov 30, 2025",
    },
  ]

  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b transition-colors hover:bg-muted/50">
              <th className="h-12 px-4 text-left align-middle font-medium">Study ID</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Phase</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Sites</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Subjects</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Timeline</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studies.map((study) => (
              <tr key={study.id} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle font-medium">{study.id}</td>
                <td className="p-4 align-middle">{study.title}</td>
                <td className="p-4 align-middle">{study.phase}</td>
                <td className="p-4 align-middle">
                  <Badge
                    variant={
                      study.status === "Active" ? "default" : study.status === "Pending" ? "secondary" : "outline"
                    }
                  >
                    {study.status}
                  </Badge>
                </td>
                <td className="p-4 align-middle">{study.sites}</td>
                <td className="p-4 align-middle">{study.subjects}</td>
                <td className="p-4 align-middle">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span>Start: {study.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span>End: {study.endDate}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right align-middle">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

