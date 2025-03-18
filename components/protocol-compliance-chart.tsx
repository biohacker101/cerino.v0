"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "PROTOCOL-2025-001",
    compliance: 98,
  },
  {
    name: "PROTOCOL-2024-003",
    compliance: 92,
  },
  {
    name: "PROTOCOL-2024-005",
    compliance: 95,
  },
  {
    name: "PROTOCOL-2024-008",
    compliance: 89,
  },
  {
    name: "PROTOCOL-2024-010",
    compliance: 94,
  },
]

export function ProtocolComplianceChart() {
  return (
    <ChartContainer
      className="h-[300px]"
      config={{
        data,
        valueFormatter: (value) => `${value}%`,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value.split("-")[2]}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <ChartTooltip>
                    <ChartTooltipContent title={data.name} content={`${data.compliance}% compliance`} />
                  </ChartTooltip>
                )
              }
              return null
            }}
          />
          <Bar dataKey="compliance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

