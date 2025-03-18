import { Calendar, Clock, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function StudyPatientTable() {
  const patients = [
    {
      id: "S-001-001",
      site: "General Hospital",
      enrollmentDate: "Apr 1, 2025",
      status: "Active",
      lastVisit: "Apr 15, 2025",
      nextVisit: "May 15, 2025",
      visitCompliance: "100%",
    },
    {
      id: "S-001-002",
      site: "General Hospital",
      enrollmentDate: "Apr 3, 2025",
      status: "Active",
      lastVisit: "Apr 17, 2025",
      nextVisit: "May 17, 2025",
      visitCompliance: "100%",
    },
    {
      id: "S-002-001",
      site: "University Medical Center",
      enrollmentDate: "Apr 5, 2025",
      status: "Active",
      lastVisit: "Apr 19, 2025",
      nextVisit: "May 19, 2025",
      visitCompliance: "100%",
    },
    {
      id: "S-002-002",
      site: "University Medical Center",
      enrollmentDate: "Apr 8, 2025",
      status: "Active",
      lastVisit: "Apr 22, 2025",
      nextVisit: "May 22, 2025",
      visitCompliance: "100%",
    },
    {
      id: "S-003-001",
      site: "Regional Hospital",
      enrollmentDate: "Apr 10, 2025",
      status: "Active",
      lastVisit: "Apr 24, 2025",
      nextVisit: "May 24, 2025",
      visitCompliance: "100%",
    },
    {
      id: "S-003-002",
      site: "Regional Hospital",
      enrollmentDate: "Apr 12, 2025",
      status: "Withdrawn",
      lastVisit: "Apr 26, 2025",
      nextVisit: "N/A",
      visitCompliance: "50%",
    },
  ]

  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b transition-colors hover:bg-muted/50">
              <th className="h-12 px-4 text-left align-middle font-medium">Subject ID</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Site</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Enrollment Date</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Last Visit</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Next Visit</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Visit Compliance</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle font-medium">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span>{patient.id}</span>
                  </div>
                </td>
                <td className="p-4 align-middle">{patient.site}</td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span>{patient.enrollmentDate}</span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <Badge variant={patient.status === "Active" ? "default" : "secondary"}>{patient.status}</Badge>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span>{patient.lastVisit}</span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span>{patient.nextVisit}</span>
                  </div>
                </td>
                <td className="p-4 align-middle">{patient.visitCompliance}</td>
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

