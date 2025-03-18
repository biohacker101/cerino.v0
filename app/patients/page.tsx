import { Filter, Plus, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientDataTable } from "@/components/patient-data-table"
import { PatientImportDialog } from "@/components/patient-import-dialog"
import { PatientEntryForm } from "@/components/patient-entry-form"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata = {
    title: "Patients | Cerino",
    description: "Manage patient data and study protocols",
}

export default function PatientsPage() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">Patients</h2>
                        <p className="text-sm text-muted-foreground">
                            Manage patient data and study protocols
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <PatientImportDialog>
                            <Button variant="outline">
                                <Upload className="mr-2 h-4 w-4" />
                                Import Data
                            </Button>
                        </PatientImportDialog>
                        <PatientEntryForm>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Patient
                            </Button>
                        </PatientEntryForm>
                    </div>
                </div>
                <Tabs defaultValue="all" className="space-y-4">
                    <div className="flex items-center justify-between">
                        <TabsList>
                            <TabsTrigger value="all" className="relative">
                                All Patients
                            </TabsTrigger>
                            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                        </TabsList>
                        <div className="ml-auto mr-4">
                            <Button variant="outline" size="sm">
                                <Filter className="mr-2 h-4 w-4" />
                                Filter
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="all" className="space-y-4">
                        <PatientDataTable />
                    </TabsContent>
                    <TabsContent value="upcoming" className="space-y-4">
                        <PatientDataTable filterStatus="upcoming" />
                    </TabsContent>
                    <TabsContent value="completed" className="space-y-4">
                        <PatientDataTable filterStatus="completed" />
                    </TabsContent>
                    <TabsContent value="cancelled" className="space-y-4">
                        <PatientDataTable filterStatus="cancelled" />
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
} 