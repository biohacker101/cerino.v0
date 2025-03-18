import type { Metadata } from "next"
import ClientHomePage from "./ClientHomePage"

export const metadata: Metadata = {
  title: "Cerino",
  description: "AI-powered platform for clinical trial management",
}

export default function HomePage() {
  return <ClientHomePage />
}

