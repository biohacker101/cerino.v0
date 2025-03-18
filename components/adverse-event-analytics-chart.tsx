"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Serious", value: 3 },
  { name: "Non-Serious", value: 11 },
]

const COLORS = ["hsl(var(--destructive))", "hsl(var(--warning))"]

export function AdverseEventAnalyticsChart() {
  return (
    <ChartContainer
      className="h-[300px]"
      config={{
        data,
        valueFormatter: (value) => `${value} events`,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <ChartTooltip>
                    <ChartTooltipContent
                      title={data.name}
                      content={`${data.value} events (${((data.value / 14) * 100).toFixed(0)}%)`}
                    />
                  </ChartTooltip>
                )
              }
              return null
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

