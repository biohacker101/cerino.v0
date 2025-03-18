import { FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function DocumentList() {
  const documents = [
    {
      id: 1,
      name: "PROTOCOL-2025-001-v1.2.pdf",
      type: "Protocol",
      uploadedBy: "Dr. Jane Doe",
      uploadedAt: "10 minutes ago",
      status: "Pending Analysis",
    },
    {
      id: 2,
      name: "Study_Manual_PROTOCOL-2024-003.pdf",
      type: "Study Manual",
      uploadedBy: "Dr. John Smith",
      uploadedAt: "1 hour ago",
      status: "Processing",
    },
    {
      id: 3,
      name: "Regulatory_Guidelines_2025.pdf",
      type: "Regulatory",
      uploadedBy: "Sarah Johnson",
      uploadedAt: "3 hours ago",
      status: "Analyzed",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium">Document</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Uploaded By</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((document) => (
                <tr key={document.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>{document.name}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">{document.type}</td>
                  <td className="p-4 align-middle">{document.uploadedBy}</td>
                  <td className="p-4 align-middle">
                    <Badge
                      variant={
                        document.status === "Analyzed"
                          ? "default"
                          : document.status === "Processing"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {document.status}
                    </Badge>
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
    </div>
  )
}

