import { FileText, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DocumentReference() {
  const documents = [
    {
      id: 1,
      name: "Protocol-v1.2.pdf",
      type: "Protocol",
      sections: [
        { id: 1, name: "4.1 Inclusion Criteria", page: 15 },
        { id: 2, name: "4.2 Exclusion Criteria", page: 16 },
        { id: 3, name: "5.1 Study Procedures", page: 22 },
      ],
    },
    {
      id: 2,
      name: "TMF_Index_2025-001.pdf",
      type: "TMF",
      sections: [
        { id: 1, name: "4.3.1 Informed Consent", page: 8 },
        { id: 2, name: "4.3.2 Subject Logs", page: 9 },
      ],
    },
    {
      id: 3,
      name: "Site_Operations_Manual.pdf",
      type: "Manual",
      sections: [
        { id: 1, name: "Document Storage", page: 22 },
        { id: 2, name: "Adverse Event Reporting", page: 35 },
      ],
    },
    {
      id: 4,
      name: "Investigator_Brochure.pdf",
      type: "IB",
      sections: [
        { id: 1, name: "2.3 Pharmacology", page: 12 },
        { id: 2, name: "3.1 Clinical Experience", page: 24 },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      {documents.map((document) => (
        <div key={document.id} className="rounded-md border">
          <div className="flex items-center justify-between border-b p-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">{document.name}</span>
            </div>
            <Badge variant="outline">{document.type}</Badge>
          </div>
          <div className="p-2">
            <div className="text-xs text-muted-foreground mb-2">Referenced sections:</div>
            <div className="space-y-1">
              {document.sections.map((section) => (
                <div key={section.id} className="flex items-center justify-between text-xs">
                  <span>{section.name}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Page {section.page}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ExternalLink className="h-3 w-3" />
                      <span className="sr-only">Open</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

