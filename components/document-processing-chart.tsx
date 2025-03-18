"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

import { ChartContainer } from "@/components/ui/chart"

const data = [
  { name: "Processed", value: 68 },
  { name: "In Progress", value: 22 },
  { name: "Pending", value: 10 },
]

const COLORS = ["hsl(var(--primary))", "hsl(var(--warning))", "hsl(var(--muted))"]

export function DocumentProcessingChart() {
  return (
    <ChartContainer
      className="h-[300px]"
      config={{
        data,
        valueFormatter: (value) => `${value} documents`,
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
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

