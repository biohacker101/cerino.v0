import { MapPin, Phone, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function StudySiteTable() {
  const sites = [
    {
      id: 1,
      name: "General Hospital",
      location: "New York, NY",
      investigator: "Dr. Jane Doe",
      status: "Active",
      enrollmentTarget: 30,
      enrollmentCurrent: 12,
      contactName: "Sarah Johnson",
      contactPhone: "+1 (555) 123-4567",
      contactEmail: "sjohnson@hospital.com",
    },
    {
      id: 2,
      name: "University Medical Center",
      location: "Boston, MA",
      investigator: "Dr. John Smith",
      status: "Active",
      enrollmentTarget: 25,
      enrollmentCurrent: 10,
      contactName: "Michael Chen",
      contactPhone: "+1 (555) 234-5678",
      contactEmail: "mchen@umc.edu",
    },
    {
      id: 3,
      name: "Regional Hospital",
      location: "Chicago, IL",
      investigator: "Dr. Emily Wilson",
      status: "Active",
      enrollmentTarget: 20,
      enrollmentCurrent: 15,
      contactName: "Robert Johnson",
      contactPhone: "+1 (555) 345-6789",
      contactEmail: "rjohnson@regional.org",
    },
    {
      id: 4,
      name: "Memorial Medical Center",
      location: "Los Angeles, CA",
      investigator: "Dr. Michael Chen",
      status: "Active",
      enrollmentTarget: 35,
      enrollmentCurrent: 22,
      contactName: "Jennifer Lee",
      contactPhone: "+1 (555) 456-7890",
      contactEmail: "jlee@memorial.com",
    },
    {
      id: 5,
      name: "Community Hospital",
      location: "Denver, CO",
      investigator: "Dr. David Brown",
      status: "Pending",
      enrollmentTarget: 15,
      enrollmentCurrent: 0,
      contactName: "Lisa Martinez",
      contactPhone: "+1 (555) 567-8901",
      contactEmail: "lmartinez@community.org",
    },
    {
      id: 6,
      name: "Research Institute",
      location: "Seattle, WA",
      investigator: "Dr. Sarah Johnson",
      status: "Pending",
      enrollmentTarget: 25,
      enrollmentCurrent: 0,
      contactName: "Thomas Wilson",
      contactPhone: "+1 (555) 678-9012",
      contactEmail: "twilson@research.org",
    },
  ]

  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b transition-colors hover:bg-muted/50">
              <th className="h-12 px-4 text-left align-middle font-medium">Site</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Location</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Investigator</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Enrollment</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Contact</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr key={site.id} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle font-medium">{site.name}</td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span>{site.location}</span>
                  </div>
                </td>
                <td className="p-4 align-middle">{site.investigator}</td>
                <td className="p-4 align-middle">
                  <Badge variant={site.status === "Active" ? "default" : "secondary"}>{site.status}</Badge>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-1">
                    <span>{site.enrollmentCurrent}</span>
                    <span className="text-muted-foreground">/</span>
                    <span>{site.enrollmentTarget}</span>
                    <span className="text-xs text-muted-foreground">
                      ({Math.round((site.enrollmentCurrent / site.enrollmentTarget) * 100) || 0}%)
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span>{site.contactName}</span>
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      <span>{site.contactPhone}</span>
                    </span>
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

