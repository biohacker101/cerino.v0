import type { Metadata } from "next"
import CalendarClientPage from "./CalendarClientPage"

export const metadata: Metadata = {
  title: "Calendar - ClinicalAI Navigator",
  description: "Study calendar and scheduling",
}

export default function CalendarPage() {
  return <CalendarClientPage />
}

