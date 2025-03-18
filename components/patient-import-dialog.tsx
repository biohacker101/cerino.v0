"use client"

import { useState } from "react"
import { Upload } from "lucide-react"

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

interface PatientImportDialogProps {
  children: React.ReactNode
}

export function PatientImportDialog({ children }: PatientImportDialogProps) {
  const [open, setOpen] = useState(false)

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle import logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Patient Data</DialogTitle>
          <DialogDescription>
            Upload a CSV file containing patient data. The file should include patient ID, name, age, gender, and study
            information.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleImport} className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input type="file" accept=".csv" />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 