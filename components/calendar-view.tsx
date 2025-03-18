"use client"

import { useState } from "react"
import { AlertCircle, Calendar, FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface CalendarViewProps {
  month: string
  year: number
  study: string
}

export function CalendarView({ month, year, study }: CalendarViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null)

  // Generate calendar days
  const getDaysInMonth = (month: string, year: number) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const monthIndex = months.indexOf(month)
    return new Date(year, monthIndex + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: string, year: number) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const monthIndex = months.indexOf(month)
    return new Date(year, monthIndex, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(month, year)
  const firstDayOfMonth = getFirstDayOfMonth(month, year)

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Site Initiation Visit",
      date: 15,
      type: "milestone",
      study: "PROTOCOL-2025-001",
      icon: <Calendar className="h-4 w-4" />,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      description: "Initial site visit to train staff and prepare for study start",
      time: "9:00 AM - 12:00 PM",
      location: "General Hospital, Room 305",
    },
    {
      id: 2,
      title: "Patient Screening",
      date: 18,
      type: "patient",
      study: "PROTOCOL-2024-003",
      icon: <Users className="h-4 w-4" />,
      color: "bg-green-100 text-green-600 border-green-200",
      description: "Screening visit for potential study participants",
      time: "10:30 AM - 3:00 PM",
      location: "University Medical Center, Clinic B",
    },
    {
      id: 3,
      title: "Regulatory Submission",
      date: 22,
      type: "regulatory",
      study: "PROTOCOL-2024-005",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-amber-100 text-amber-600 border-amber-200",
      description: "Deadline for regulatory document submission",
      time: "5:00 PM",
      location: "Online submission",
    },
    {
      id: 4,
      title: "Data Safety Review",
      date: 25,
      type: "safety",
      study: "PROTOCOL-2024-003",
      icon: <AlertCircle className="h-4 w-4" />,
      color: "bg-red-100 text-red-600 border-red-200",
      description: "Safety monitoring committee review of study data",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Meeting",
    },
    {
      id: 5,
      title: "Protocol Amendment",
      date: 10,
      type: "regulatory",
      study: "PROTOCOL-2025-001",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-amber-100 text-amber-600 border-amber-200",
      description: "Review and finalize protocol amendment",
      time: "11:00 AM - 12:30 PM",
      location: "Conference Room A",
    },
    {
      id: 6,
      title: "Investigator Meeting",
      date: 5,
      type: "milestone",
      study: "PROTOCOL-2024-008",
      icon: <Users className="h-4 w-4" />,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      description: "Meeting with all study investigators to discuss progress",
      time: "9:00 AM - 4:00 PM",
      location: "Grand Hotel, Conference Center",
    },
  ]

  // Filter events by study if needed
  const filteredEvents = study === "all" ? events : events.filter((event) => event.study === study)

  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    return filteredEvents.filter((event) => event.date === day)
  }

  // Open event details dialog
  const openEventDetails = (event: any) => {
    setSelectedEvent(event)
  }

  // Close event details dialog
  const closeEventDetails = () => {
    setSelectedEvent(null)
  }

  // Generate calendar grid
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-24 rounded-md border border-dashed p-1" />)
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = getEventsForDay(day)
    const isToday = day === 11 // Just for demo purposes, hardcoding day 11 as "today"

    calendarDays.push(
      <div key={day} className={`h-24 rounded-md border p-1 ${isToday ? "border-primary bg-primary/5" : ""}`}>
        <div className="flex justify-between">
          <span className={`text-sm ${isToday ? "font-bold" : ""}`}>{day}</span>
          {isToday && (
            <span className="rounded-full bg-primary px-1.5 py-0.5 text-xs font-medium text-primary-foreground">
              Today
            </span>
          )}
        </div>
        <div className="mt-1 space-y-1">
          {dayEvents.map((event) => (
            <Button
              key={event.id}
              variant="ghost"
              className={`h-auto w-full justify-start p-1 text-xs ${event.color}`}
              onClick={() => openEventDetails(event)}
            >
              <div className="mr-1">{event.icon}</div>
              <span className="truncate">{event.title}</span>
            </Button>
          ))}
        </div>
      </div>,
    )
  }

  return (
    <div>
      {/* Calendar header - days of week */}
      <div className="grid grid-cols-7 gap-1 text-center font-medium">
        <div className="p-2">Sun</div>
        <div className="p-2">Mon</div>
        <div className="p-2">Tue</div>
        <div className="p-2">Wed</div>
        <div className="p-2">Thu</div>
        <div className="p-2">Fri</div>
        <div className="p-2">Sat</div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">{calendarDays}</div>

      {/* Event details dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={closeEventDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
            <DialogDescription>
              {selectedEvent?.study} - {selectedEvent?.type}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Date</div>
                <div>
                  {month} {selectedEvent?.date}, {year}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Time</div>
                <div>{selectedEvent?.time}</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Location</div>
              <div>{selectedEvent?.location}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Description</div>
              <div className="text-sm">{selectedEvent?.description}</div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={closeEventDetails}>
                Close
              </Button>
              <Button>View Details</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

