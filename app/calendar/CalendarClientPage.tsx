"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard-layout"
import { CalendarView } from "@/components/calendar-view"
import { UpcomingEvents } from "@/components/upcoming-events"

export default function CalendarClientPage() {
  const [currentMonth, setCurrentMonth] = useState("March")
  const [currentYear, setCurrentYear] = useState(2025)
  const [selectedStudy, setSelectedStudy] = useState("all")

  const prevMonth = () => {
    if (currentMonth === "January") {
      setCurrentMonth("December")
      setCurrentYear(currentYear - 1)
    } else {
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
      const currentIndex = months.indexOf(currentMonth)
      setCurrentMonth(months[currentIndex - 1])
    }
  }

  const nextMonth = () => {
    if (currentMonth === "December") {
      setCurrentMonth("January")
      setCurrentYear(currentYear + 1)
    } else {
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
      const currentIndex = months.indexOf(currentMonth)
      setCurrentMonth(months[currentIndex + 1])
    }
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between space-y-2 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h3 className="text-lg font-medium">
              {currentMonth} {currentYear}
            </h3>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex space-x-2">
            <Select value={selectedStudy} onValueChange={setSelectedStudy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Studies</SelectItem>
                <SelectItem value="PROTOCOL-2025-001">PROTOCOL-2025-001</SelectItem>
                <SelectItem value="PROTOCOL-2024-003">PROTOCOL-2024-003</SelectItem>
                <SelectItem value="PROTOCOL-2024-005">PROTOCOL-2024-005</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="w-[200px] pl-8" />
            </div>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-5">
            <CardContent className="p-4">
              <CalendarView month={currentMonth} year={currentYear} study={selectedStudy} />
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Scheduled events and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingEvents study={selectedStudy} />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

