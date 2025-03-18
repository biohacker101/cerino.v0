"use client"

import { useState } from "react"
import { Check, Database, FileText, Link2, Plus, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function IntegrationCards() {
  const [showDialog, setShowDialog] = useState(false)
  const [integrationType, setIntegrationType] = useState("")

  const openIntegrationDialog = (type: string) => {
    setIntegrationType(type)
    setShowDialog(true)
  }

  const integrations = [
    {
      id: "ctms",
      title: "Clinical Trial Management System (CTMS)",
      description: "Connect to your CTMS to sync study and site data",
      icon: <Database className="h-8 w-8 text-primary" />,
      status: "connected",
      connectedTo: "Medidata Rave CTMS",
    },
    {
      id: "edc",
      title: "Electronic Data Capture (EDC)",
      description: "Connect to your EDC system for patient data",
      icon: <FileText className="h-8 w-8 text-primary" />,
      status: "connected",
      connectedTo: "OpenClinica EDC",
    },
    {
      id: "etmf",
      title: "Electronic Trial Master File (eTMF)",
      description: "Connect to your eTMF for document management",
      icon: <Server className="h-8 w-8 text-primary" />,
      status: "not-connected",
    },
    {
      id: "ixrs",
      title: "Interactive Response Technology (IxRS)",
      description: "Connect to your IxRS for randomization and drug supply",
      icon: <Link2 className="h-8 w-8 text-primary" />,
      status: "not-connected",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {integrations.map((integration) => (
        <Card key={integration.id}>
          <CardHeader className="flex flex-row items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-2">{integration.icon}</div>
            <div>
              <CardTitle>{integration.title}</CardTitle>
              <CardDescription>{integration.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {integration.status === "connected" ? (
              <div className="flex items-center rounded-md bg-green-50 p-2 text-sm text-green-600">
                <Check className="mr-2 h-4 w-4" />
                <span>Connected to {integration.connectedTo}</span>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">Not connected. Click below to set up integration.</div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              variant={integration.status === "connected" ? "outline" : "default"}
              className="w-full"
              onClick={() => openIntegrationDialog(integration.title)}
            >
              {integration.status === "connected" ? (
                "Manage Connection"
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Connect
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect to {integrationType}</DialogTitle>
            <DialogDescription>Enter the connection details for your {integrationType} system.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="api-url">API URL</Label>
              <Input id="api-url" placeholder="https://api.example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input id="api-key" type="password" placeholder="Enter your API key" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instance">Instance Name</Label>
              <Input id="instance" placeholder="Enter your instance name" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowDialog(false)}>Connect</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

