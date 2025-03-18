"use client"

import { Calendar, Clock, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface PatientDataTableProps {
    filterStatus?: "upcoming" | "completed" | "cancelled"
}

export function PatientDataTable({ filterStatus }: PatientDataTableProps) {
    const patients = [
        {
            id: "P-001",
            name: "John Smith",
            age: 45,
            gender: "Male",
            study: "PROTOCOL-2025-001",
            status: "upcoming",
            nextVisit: "Mar 25, 2025",
            lastVisit: "Feb 25, 2025",
        },
        {
            id: "P-002",
            name: "Sarah Johnson",
            age: 38,
            gender: "Female",
            study: "PROTOCOL-2025-001",
            status: "completed",
            nextVisit: "N/A",
            lastVisit: "Mar 15, 2025",
        },
        {
            id: "P-003",
            name: "Michael Brown",
            age: 52,
            gender: "Male",
            study: "PROTOCOL-2024-003",
            status: "cancelled",
            nextVisit: "N/A",
            lastVisit: "Mar 10, 2025",
        },
    ].filter((patient) => !filterStatus || patient.status === filterStatus)

    return (
        <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                    <thead>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                            <th className="h-12 px-4 text-left align-middle font-medium">Patient ID</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Age</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Gender</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Study</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Next Visit</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Last Visit</th>
                            <th className="h-12 px-4 text-left align-middle font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id} className="border-b transition-colors hover:bg-muted/50">
                                <td className="p-4 align-middle font-medium">{patient.id}</td>
                                <td className="p-4 align-middle">{patient.name}</td>
                                <td className="p-4 align-middle">{patient.age}</td>
                                <td className="p-4 align-middle">{patient.gender}</td>
                                <td className="p-4 align-middle">{patient.study}</td>
                                <td className="p-4 align-middle">
                                    <Badge
                                        variant={
                                            patient.status === "upcoming"
                                                ? "default"
                                                : patient.status === "completed"
                                                    ? "success"
                                                    : "destructive"
                                        }
                                    >
                                        {patient.status}
                                    </Badge>
                                </td>
                                <td className="p-4 align-middle">
                                    <div className="flex items-center">
                                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                                        {patient.nextVisit}
                                    </div>
                                </td>
                                <td className="p-4 align-middle">
                                    <div className="flex items-center">
                                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                        {patient.lastVisit}
                                    </div>
                                </td>
                                <td className="p-4 align-middle">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Actions</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem>Edit Patient</DropdownMenuItem>
                                            <DropdownMenuItem>Schedule Visit</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
} 