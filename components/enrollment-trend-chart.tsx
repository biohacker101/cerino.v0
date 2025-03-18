"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", actual: 10, target: 12 },
  { month: "Feb", actual: 25, target: 24 },
  { month: "Mar", actual: 45, target: 36 },
  { month: "Apr", actual: 55, target: 48 },
  { month: "May", actual: 65, target: 60 },
  { month: "Jun", actual: 78, target: 72 },
  { month: "Jul", actual: 0, target: 84 },
  { month: "Aug", actual: 0, target: 96 },
  { month: "Sep", actual: 0, target: 108 },
  { month: "Oct", actual: 0, target: 120 },
  { month: "Nov", actual: 0, target: 132 },
  { month: "Dec", actual: 0, target: 144 },
]

export function EnrollmentTrendChart() {
  return (
    <ChartContainer
      className="h-[300px]"
      config={{
        data,
        valueFormatter: (value) => `${value} patients`,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <ChartTooltip>
                    <ChartTooltipContent
                      title={data.month}
                      content={`Actual: ${data.actual} patients\nTarget: ${data.target} patients`}
                    />
                  </ChartTooltip>
                )
              }
              return null
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

