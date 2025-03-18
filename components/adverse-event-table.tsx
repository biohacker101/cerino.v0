import { AlertCircle, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function AdverseEventTable() {
  const events = [
    {
      id: "AE-2025-001",
      description: "Severe headache requiring medication",
      study: "PROTOCOL-2025-001",
      subject: "S-001-023",
      reportedDate: "Mar 10, 2025",
      status: "Open",
      severity: "Serious",
      dueDate: "Mar 13, 2025",
    },
    {
      id: "AE-2025-002",
      description: "Mild nausea after medication",
      study: "PROTOCOL-2024-003",
      subject: "S-003-045",
      reportedDate: "Mar 9, 2025",
      status: "In Progress",
      severity: "Non-serious",
      dueDate: "Mar 16, 2025",
    },
    {
      id: "AE-2025-003",
      description: "Elevated liver enzymes",
      study: "PROTOCOL-2024-005",
      subject: "S-005-012",
      reportedDate: "Mar 8, 2025",
      status: "In Progress",
      severity: "Non-serious",
      dueDate: "Mar 15, 2025",
    },
    {
      id: "AE-2025-004",
      description: "Rash on injection site",
      study: "PROTOCOL-2024-008",
      subject: "S-008-007",
      reportedDate: "Mar 5, 2025",
      status: "Resolved",
      severity: "Non-serious",
      dueDate: "Completed",
    },
  ]

  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b transition-colors hover:bg-muted/50">
              <th className="h-12 px-4 text-left align-middle font-medium">Event ID</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Description</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Study</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Subject</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Severity</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Due Date</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle font-medium">{event.id}</td>
                <td className="p-4 align-middle">{event.description}</td>
                <td className="p-4 align-middle">{event.study}</td>
                <td className="p-4 align-middle">{event.subject}</td>
                <td className="p-4 align-middle">
                  <Badge
                    variant={
                      event.status === "Open" ? "destructive" : event.status === "In Progress" ? "secondary" : "default"
                    }
                  >
                    {event.status}
                  </Badge>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-1">
                    {event.severity === "Serious" ? (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                    )}
                    <span>{event.severity}</span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  {event.dueDate !== "Completed" ? (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.dueDate}</span>
                    </div>
                  ) : (
                    <span>{event.dueDate}</span>
                  )}
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

