import type { Metadata } from "next"
import ChatClientPage from "./ChatClientPage"

export const metadata: Metadata = {
  title: "Protocol Assistant",
  description: "AI-powered protocol analysis and assistance",
}

export default function ChatPage() {
  return <ChatClientPage />
}

