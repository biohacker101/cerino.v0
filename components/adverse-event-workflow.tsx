"use client"

import { useState } from "react"
import { AlertCircle, ArrowRight, Check, FileText, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function AdverseEventWorkflow() {
  const [step, setStep] = useState(1)
  const [eventType, setEventType] = useState("non-serious")

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Report Adverse Event</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Step {step} of 4</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <User className="h-5 w-5" />
        </div>
        <div className="mx-2 h-0.5 w-full bg-border">
          <div className="h-0.5 bg-primary transition-all" style={{ width: `${(step - 1) * 33.33}%` }} />
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          <AlertCircle className="h-5 w-5" />
        </div>
        <div className="mx-2 h-0.5 w-full bg-border">
          <div className="h-0.5 bg-primary transition-all" style={{ width: `${(step - 2) * 50}%` }} />
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          <FileText className="h-5 w-5" />
        </div>
        <div className="mx-2 h-0.5 w-full bg-border">
          <div className="h-0.5 bg-primary transition-all" style={{ width: `${(step - 3) * 100}%` }} />
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            step >= 4 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          <Check className="h-5 w-5" />
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Subject Information</CardTitle>
            <CardDescription>Enter the subject information for the adverse event</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="study">Study</Label>
                <Select defaultValue="PROTOCOL-2025-001">
                  <SelectTrigger id="study">
                    <SelectValue placeholder="Select study" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PROTOCOL-2025-001">PROTOCOL-2025-001</SelectItem>
                    <SelectItem value="PROTOCOL-2024-003">PROTOCOL-2024-003</SelectItem>
                    <SelectItem value="PROTOCOL-2024-005">PROTOCOL-2024-005</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject ID</Label>
                <Input id="subject" placeholder="Enter subject ID" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="site">Site</Label>
              <Select defaultValue="site-001">
                <SelectTrigger id="site">
                  <SelectValue placeholder="Select site" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="site-001">Site 001 - General Hospital</SelectItem>
                  <SelectItem value="site-002">Site 002 - University Medical Center</SelectItem>
                  <SelectItem value="site-003">Site 003 - Regional Hospital</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" disabled>
              Back
            </Button>
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
            <CardDescription>Provide details about the adverse event</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea id="description" placeholder="Describe the adverse event in detail" rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="onset-date">Onset Date</Label>
                <Input id="onset-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-date">Report Date</Label>
                <Input id="report-date" type="date" defaultValue="2025-03-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Event Type</Label>
              <RadioGroup defaultValue={eventType} onValueChange={setEventType} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-serious" id="non-serious" />
                  <Label htmlFor="non-serious" className="font-normal">
                    Non-Serious Adverse Event
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="serious" id="serious" />
                  <Label htmlFor="serious" className="font-normal">
                    Serious Adverse Event (SAE)
                  </Label>
                </div>
              </RadioGroup>
            </div>
            {eventType === "serious" && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Serious Adverse Event Reporting</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        SAEs must be reported within 24 hours of awareness. This will trigger an expedited reporting
                        workflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Complete required documentation for the adverse event</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="severity">Severity</Label>
              <Select defaultValue="moderate">
                <SelectTrigger id="severity">
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mild">Mild</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="severe">Severe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="relationship">Relationship to Study Treatment</Label>
              <Select defaultValue="possible">
                <SelectTrigger id="relationship">
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unrelated">Unrelated</SelectItem>
                  <SelectItem value="unlikely">Unlikely</SelectItem>
                  <SelectItem value="possible">Possible</SelectItem>
                  <SelectItem value="probable">Probable</SelectItem>
                  <SelectItem value="definite">Definite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="action">Action Taken</Label>
              <Select defaultValue="dose-reduced">
                <SelectTrigger id="action">
                  <SelectValue placeholder="Select action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="dose-reduced">Dose Reduced</SelectItem>
                  <SelectItem value="drug-interrupted">Drug Interrupted</SelectItem>
                  <SelectItem value="drug-discontinued">Drug Discontinued</SelectItem>
                  <SelectItem value="not-applicable">Not Applicable</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="outcome">Outcome</Label>
              <Select defaultValue="recovered">
                <SelectTrigger id="outcome">
                  <SelectValue placeholder="Select outcome" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recovered">Recovered/Resolved</SelectItem>
                  <SelectItem value="recovering">Recovering/Resolving</SelectItem>
                  <SelectItem value="not-recovered">Not Recovered/Not Resolved</SelectItem>
                  <SelectItem value="fatal">Fatal</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comments">Additional Comments</Label>
              <Textarea id="comments" placeholder="Enter any additional information" rows={3} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Review & Submit</CardTitle>
            <CardDescription>Review the information and submit the adverse event report</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium">Subject Information</h4>
                  <dl className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <dt className="text-sm text-muted-foreground">Study:</dt>
                      <dd className="text-sm">PROTOCOL-2025-001</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-muted-foreground">Subject ID:</dt>
                      <dd className="text-sm">S-001-045</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-muted-foreground">Site:</dt>
                      <dd className="text-sm">Site 001 - General Hospital</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Event Details</h4>
                  <dl className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <dt className="text-sm text-muted-foreground">Description:</dt>
                      <dd className="text-sm">Moderate headache requiring medication</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-muted-foreground">Onset Date:</dt>
                      <dd className="text-sm">Mar 10, 2025</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-muted-foreground">Event Type:</dt>
                      <dd className="text-sm">
                        {eventType === "serious" ? "Serious Adverse Event" : "Non-Serious Adverse Event"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium">Documentation</h4>
                <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                  <div className="flex justify-between">
                    <dt className="text-sm text-muted-foreground">Severity:</dt>
                    <dd className="text-sm">Moderate</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-muted-foreground">Relationship:</dt>
                    <dd className="text-sm">Possible</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-muted-foreground">Action Taken:</dt>
                    <dd className="text-sm">Dose Reduced</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-muted-foreground">Outcome:</dt>
                    <dd className="text-sm">Recovered/Resolved</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Auto-Generated Documentation</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>The system will automatically generate the following documents:</p>
                    <ul className="mt-1 list-disc pl-5">
                      <li>Adverse Event Report Form</li>
                      <li>Regulatory Notification (if applicable)</li>
                      <li>Follow-up Schedule</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button>
              Submit Report
              <Check className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

