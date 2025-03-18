"use client"

import { AlertCircle, Calendar, Clock, FileText, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

interface UpcomingEventsProps {
  study: string
}

export function UpcomingEvents({ study }: UpcomingEventsProps) {
  const events = [
    {
      id: 1,
      title: "Site Initiation Visit",
      date: "Mar 15, 2025",
      time: "9:00 AM",
      location: "General Hospital",
      study: "PROTOCOL-2025-001",
      type: "milestone",
      icon: <Calendar className="h-4 w-4 text-blue-600" />,
    },
    {
      id: 2,
      title: "Patient Screening",
      date: "Mar 18, 2025",
      time: "10:30 AM",
      location: "University Medical Center",
      study: "PROTOCOL-2024-003",
      type: "patient",
      icon: <Users className="h-4 w-4 text-green-600" />,
    },
    {
      id: 3,
      title: "Regulatory Submission",
      date: "Mar 22, 2025",
      time: "5:00 PM",
      location: "Online",
      study: "PROTOCOL-2024-005",
      type: "regulatory",
      icon: <FileText className="h-4 w-4 text-amber-600" />,
    },
    {
      id: 4,
      title: "Data Safety Review",
      date: "Mar 25, 2025",
      time: "2:00 PM",
      location: "Virtual Meeting",
      study: "PROTOCOL-2024-003",
      type: "safety",
      icon: <AlertCircle className="h-4 w-4 text-red-600" />,
    },
  ]

  // Filter events by study if needed
  const filteredEvents = study === "all" ? events : events.filter((event) => event.study === study)

  return (
    <div className="space-y-4">
      {filteredEvents.map((event) => (
        <div key={event.id} className="flex items-start space-x-3 rounded-md border p-3">
          <div className="mt-0.5 rounded-full bg-primary/10 p-1.5">{event.icon}</div>
          <div className="space-y-1">
            <h4 className="font-medium">{event.title}</h4>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <FileText className="mr-1 h-3 w-3" />
              <span>{event.study}</span>
            </div>
          </div>
        </div>
      ))}
      {filteredEvents.length === 0 && (
        <div className="text-center py-4 text-muted-foreground">No upcoming events for the selected study</div>
      )}
      <Button variant="outline" className="w-full">
        View All Events
      </Button>
    </div>
  )
}

