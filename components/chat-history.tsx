import { Bot, Calendar, Clock, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ChatHistory() {
  const conversations = [
    {
      id: 1,
      title: "Protocol Inclusion Criteria",
      date: "Today",
      time: "10:30 AM",
      preview: "What are the inclusion criteria for the study?",
      messages: 4,
      study: "PROTOCOL-2025-001",
    },
    {
      id: 2,
      title: "Adverse Event Reporting",
      date: "Today",
      time: "9:15 AM",
      preview: "How do I report a serious adverse event?",
      messages: 6,
      study: "PROTOCOL-2025-001",
    },
    {
      id: 3,
      title: "Patient Visit Schedule",
      date: "Yesterday",
      time: "2:45 PM",
      preview: "What is the visit schedule for patients?",
      messages: 8,
      study: "PROTOCOL-2024-003",
    },
    {
      id: 4,
      title: "Document Filing",
      date: "Mar 9, 2025",
      time: "11:20 AM",
      preview: "Where should I file the regulatory documents?",
      messages: 5,
      study: "PROTOCOL-2024-005",
    },
    {
      id: 5,
      title: "Protocol Amendments",
      date: "Mar 8, 2025",
      time: "3:30 PM",
      preview: "Are there any pending protocol amendments?",
      messages: 3,
      study: "PROTOCOL-2025-001",
    },
  ]

  return (
    <div className="space-y-2">
      {conversations.map((conversation) => (
        <Button key={conversation.id} variant="ghost" className="w-full justify-start h-auto py-2">
          <div className="flex w-full flex-col items-start gap-1 text-left">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-primary" />
                <span className="font-medium">{conversation.title}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MessageSquare className="h-3 w-3" />
                <span>{conversation.messages}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-1">{conversation.preview}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{conversation.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{conversation.time}</span>
              </div>
            </div>
          </div>
        </Button>
      ))}
    </div>
  )
}

