import { FileText, Download, Eye } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function StudyDocumentList() {
  const documents = [
    {
      id: 1,
      name: "Protocol-v1.2.pdf",
      category: "Protocol",
      version: "1.2",
      uploadedBy: "Dr. Jane Doe",
      uploadedDate: "Jan 15, 2025",
      status: "Approved",
    },
    {
      id: 2,
      name: "Informed_Consent_Form.pdf",
      category: "ICF",
      version: "1.0",
      uploadedBy: "Dr. Jane Doe",
      uploadedDate: "Jan 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      name: "Investigator_Brochure.pdf",
      category: "IB",
      version: "2.1",
      uploadedBy: "Dr. John Smith",
      uploadedDate: "Feb 5, 2025",
      status: "Approved",
    },
    {
      id: 4,
      name: "Case_Report_Form.pdf",
      category: "CRF",
      version: "1.0",
      uploadedBy: "Sarah Johnson",
      uploadedDate: "Feb 10, 2025",
      status: "Approved",
    },
    {
      id: 5,
      name: "Protocol_Amendment_1.pdf",
      category: "Protocol",
      version: "1.3",
      uploadedBy: "Dr. Jane Doe",
      uploadedDate: "Mar 1, 2025",
      status: "Pending Approval",
    },
    {
      id: 6,
      name: "Monitoring_Plan.pdf",
      category: "Monitoring",
      version: "1.0",
      uploadedBy: "Dr. Michael Chen",
      uploadedDate: "Mar 5, 2025",
      status: "Approved",
    },
  ]

  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b transition-colors hover:bg-muted/50">
              <th className="h-12 px-4 text-left align-middle font-medium">Document</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Version</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Uploaded By</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
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
                <td className="p-4 align-middle">{document.category}</td>
                <td className="p-4 align-middle">{document.version}</td>
                <td className="p-4 align-middle">{document.uploadedBy}</td>
                <td className="p-4 align-middle">{document.uploadedDate}</td>
                <td className="p-4 align-middle">
                  <Badge variant={document.status === "Approved" ? "default" : "secondary"}>{document.status}</Badge>
                </td>
                <td className="p-4 text-right align-middle">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

