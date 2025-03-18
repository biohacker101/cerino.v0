"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface PatientEntryFormProps {
    children: React.ReactNode
}

export function PatientEntryForm({ children }: PatientEntryFormProps) {
    const [open, setOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Patient</DialogTitle>
                    <DialogDescription>Enter patient details to add them to the study.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Smith" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="age">Age</Label>
                                <Input id="age" type="number" min="0" max="120" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="gender">Gender</Label>
                                <Select required>
                                    <SelectTrigger id="gender">
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="study">Study Protocol</Label>
                            <Select required>
                                <SelectTrigger id="study">
                                    <SelectValue placeholder="Select study" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="PROTOCOL-2025-001">PROTOCOL-2025-001</SelectItem>
                                    <SelectItem value="PROTOCOL-2024-003">PROTOCOL-2024-003</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Add Patient</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
} 