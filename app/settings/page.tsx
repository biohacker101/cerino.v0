import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import type { Metadata } from "next"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { IntegrationCards } from "@/components/integration-cards"

export const metadata: Metadata = {
  title: "Settings - ClinicalAI Navigator",
  description: "Platform settings and integrations",
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security & Privacy</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>Manage your organization details and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="org-name">Organization Name</Label>
                <Input id="org-name" defaultValue="Clinical Research Partners" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-email">Primary Contact Email</Label>
                <Input id="org-email" type="email" defaultValue="admin@clinicalresearch.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-phone">Phone Number</Label>
                <Input id="org-phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Default Date Format</Label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="date-format-1" name="date-format" defaultChecked />
                    <Label htmlFor="date-format-1">MM/DD/YYYY</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="date-format-2" name="date-format" />
                    <Label htmlFor="date-format-2">DD/MM/YYYY</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="date-format-3" name="date-format" />
                    <Label htmlFor="date-format-3">YYYY-MM-DD</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Time Zone</Label>
                <Select defaultValue="america-new_york">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america-new_york">America/New_York (UTC-05:00)</SelectItem>
                    <SelectItem value="america-chicago">America/Chicago (UTC-06:00)</SelectItem>
                    <SelectItem value="america-denver">America/Denver (UTC-07:00)</SelectItem>
                    <SelectItem value="america-los_angeles">America/Los_Angeles (UTC-08:00)</SelectItem>
                    <SelectItem value="europe-london">Europe/London (UTC+00:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the appearance of the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the platform</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compact-view">Compact View</Label>
                  <p className="text-sm text-muted-foreground">Use a more compact layout for tables and lists</p>
                </div>
                <Switch id="compact-view" />
              </div>
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 ring-2 ring-offset-2" />
                  <div className="h-8 w-8 rounded-full bg-teal-500" />
                  <div className="h-8 w-8 rounded-full bg-purple-500" />
                  <div className="h-8 w-8 rounded-full bg-amber-500" />
                  <div className="h-8 w-8 rounded-full bg-red-500" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Integrations</CardTitle>
              <CardDescription>Connect ClinicalAI Navigator with your existing systems</CardDescription>
            </CardHeader>
            <CardContent>
              <IntegrationCards />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require two-factor authentication for all users</p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">Automatically log out inactive users after 30 minutes</p>
                </div>
                <Switch id="session-timeout" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="ip-restriction">IP Restriction</Label>
                  <p className="text-sm text-muted-foreground">Restrict access to specific IP addresses</p>
                </div>
                <Switch id="ip-restriction" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-policy">Password Policy</Label>
                <Select defaultValue="strong">
                  <SelectTrigger id="password-policy">
                    <SelectValue placeholder="Select password policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (8+ characters)</SelectItem>
                    <SelectItem value="strong">Strong (8+ chars, mixed case, numbers)</SelectItem>
                    <SelectItem value="very-strong">Very Strong (12+ chars, mixed case, numbers, symbols)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">HIPAA Compliance</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>This platform is configured for HIPAA compliance with:</p>
                      <ul className="mt-1 list-disc pl-5">
                        <li>End-to-end encryption for all data</li>
                        <li>Comprehensive audit logging</li>
                        <li>Role-based access controls</li>
                        <li>Secure data backups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

