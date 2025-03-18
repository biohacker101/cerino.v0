"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", efficiency: 92.5 },
  { month: "Feb", efficiency: 94.2 },
  { month: "Mar", efficiency: 95.8 },
  { month: "Apr", efficiency: 96.7 },
  { month: "May", efficiency: 97.3 },
  { month: "Jun", efficiency: 98.2 },
]

export function DocumentProcessingAnalyticsChart() {
  return (
    <ChartContainer
      className="h-[300px]"
      config={{
        data,
        valueFormatter: (value) => `${value}%`,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            domain={[90, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <ChartTooltip>
                    <ChartTooltipContent title={data.month} content={`Efficiency: ${data.efficiency}%`} />
                  </ChartTooltip>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="efficiency"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

