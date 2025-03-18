"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { site: "Site 1", actual: 12, target: 30 },
  { site: "Site 2", actual: 10, target: 25 },
  { site: "Site 3", actual: 15, target: 20 },
  { site: "Site 4", actual: 22, target: 35 },
  { site: "Site 5", actual: 0, target: 15 },
  { site: "Site 6", actual: 0, target: 25 },
]

export function SitePerformanceChart() {
  return (
    <ChartContainer
      className="h-[300px]"
      config={{
        data,
        valueFormatter: (value) => `${value} patients`,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="site" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <ChartTooltip>
                    <ChartTooltipContent
                      title={data.site}
                      content={`Actual: ${data.actual} patients\nTarget: ${data.target} patients\nProgress: ${Math.round((data.actual / data.target) * 100)}%`}
                    />
                  </ChartTooltip>
                )
              }
              return null
            }}
          />
          <Legend />
          <Bar dataKey="actual" name="Actual" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar dataKey="target" name="Target" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

