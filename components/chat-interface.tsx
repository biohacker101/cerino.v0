"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Check, Copy, ThumbsDown, ThumbsUp, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Study Buddy for PROTOCOL-2025-001. How can I help you today?",
    },
    {
      role: "user",
      content: "What are the inclusion criteria for the study?",
    },
    {
      role: "assistant",
      content:
        "According to PROTOCOL-2025-001, the inclusion criteria are:\n\n1. Adults aged 18-65 years\n2. Confirmed diagnosis of condition X for at least 6 months\n3. Stable medication regimen for at least 4 weeks prior to screening\n4. Ability to provide written informed consent\n5. Willing to comply with all study procedures and availability for the duration of the study\n\nWould you like me to provide more details on any specific criterion?",
    },
    {
      role: "user",
      content: "Where do I file the signed informed consent forms?",
    },
    {
      role: "assistant",
      content:
        "According to the TMF index for PROTOCOL-2025-001, signed informed consent forms should be filed in:\n\nSection: 4.3 - Subject Documentation\nSubsection: 4.3.1 - Informed Consent\n\nEach form should be filed with the corresponding subject ID and visit date. Remember that the original signed copy must be retained at the site, with a copy provided to the participant. All forms must be stored in a secure, locked cabinet with restricted access.",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-[400px] flex-col space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex max-w-[80%] items-start gap-3 rounded-lg px-4 py-2 ${
                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              {message.role === "assistant" && <Bot className="mt-1 h-5 w-5 shrink-0" />}
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-4">
                  {/* <span className="text-xs text-muted-foreground">{message.timestamp}</span> */}
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-muted-foreground hover:text-foreground"
                              onClick={() => copyToClipboard(message.content)}
                            >
                              <Copy className="h-3 w-3" />
                              <span className="sr-only">Copy</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy to clipboard</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-muted-foreground hover:text-foreground"
                            >
                              <ThumbsUp className="h-3 w-3" />
                              <span className="sr-only">Helpful</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Mark as helpful</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-muted-foreground hover:text-foreground"
                            >
                              <ThumbsDown className="h-3 w-3" />
                              <span className="sr-only">Not helpful</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Mark as not helpful</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}
                </div>
                <p className="text-sm whitespace-pre-line">{message.content}</p>

                {/* {message.sources && message.sources.length > 0 && (
                  <div className="mt-2 rounded-md bg-background p-2 text-xs">
                    <div className="font-medium">Sources:</div>
                    <ul className="mt-1 space-y-1">
                      {message.sources.map((source, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <FileText className="h-3 w-3 text-primary" />
                          <span>{source.name}</span>
                          <span className="text-muted-foreground">
                            (Page {source.page}, {source.section})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}
              </div>
              {message.role === "user" && <User className="mt-1 h-5 w-5 shrink-0" />}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Check className="mr-1 h-3 w-3 text-green-500" />
            <span>AI trained on study documents as of March 10, 2025</span>
          </div>
          <Button variant="link" size="sm" className="h-auto p-0 text-xs">
            Report an issue
          </Button>
        </div>
      </div>
    </div>
  )
}

