import { AlertCircle, Calendar, FileText, MessageSquare, Upload } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivityTable() {
  const activities = [
    {
      id: 1,
      user: "Dr. Jane Doe",
      action: "Uploaded protocol document",
      study: "PROTOCOL-2025-001",
      time: "10 minutes ago",
      icon: <Upload className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 2,
      user: "Dr. John Smith",
      action: "Reported adverse event",
      study: "PROTOCOL-2024-003",
      time: "1 hour ago",
      icon: <AlertCircle className="h-4 w-4 text-red-500" />,
    },
    {
      id: 3,
      user: "Sarah Johnson",
      action: "Updated patient visit schedule",
      study: "PROTOCOL-2024-005",
      time: "3 hours ago",
      icon: <Calendar className="h-4 w-4 text-green-500" />,
    },
    {
      id: 4,
      user: "Dr. Michael Chen",
      action: "Queried Study Buddy",
      study: "PROTOCOL-2024-008",
      time: "Yesterday",
      icon: <MessageSquare className="h-4 w-4 text-purple-500" />,
    },
    {
      id: 5,
      user: "Emily Wilson",
      action: "Generated regulatory report",
      study: "PROTOCOL-2024-010",
      time: "Yesterday",
      icon: <FileText className="h-4 w-4 text-amber-500" />,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium">User</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Action</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Study</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={`/placeholder.svg?height=32&width=32&text=${activity.user.charAt(0)}`}
                          alt={activity.user}
                        />
                        <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{activity.user}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      {activity.icon}
                      <span>{activity.action}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">{activity.study}</td>
                  <td className="p-4 align-middle">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

