"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, Plus, Upload, FileText, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StudySelector } from "@/components/study-selector"
import { Badge } from "@/components/ui/badge"

interface Message {
  role: 'user' | 'assistant';
  content: string;
  attachments?: {
    name: string;
    type: string;
  }[];
}

interface Chat {
  id: number;
  study: string;
  messages: Message[];
  documents?: {
    name: string;
    type: string;
    uploadedAt: string;
  }[];
}

// Hardcoded responses for specific protocol questions
const PROTOCOL_RESPONSES: Record<string, string> = {
  "What are the key inclusion/exclusion criteria and required screening tests?":
    "Patients must be 18–50 years old with confirmed T. cruzi infection (by serology and PCR). Required screening tests include conventional serology, qualitative PCR, and an EKG. Exclusions include chronic cardiac/digestive CD signs, contraindications to BZN/E1224, and significant lab abnormalities.",

  "What is the visit schedule and its allowable windows?":
    "Screening lasts 40 days. Randomization occurs on Day 1, followed by treatment visits on Days 1–3, weekly visits from week 2 to week 10, and follow-ups at 4, 6, and 12 months. Allowable windows are ±3 days during treatment and ±7 days for follow-ups.",

  "How is patient randomization handled and what are the dosing regimens?":
    "Patients are randomized equally into seven parallel groups. Treatment arms include various BZN regimens (e.g., 150 mg for 4 weeks, 300 mg for 8 weeks) and combination therapy with E1224, with matched placebos provided.",

  "What safety thresholds (e.g., lab values, EKG changes) trigger discontinuation?":
    "Discontinuation is triggered by lab values such as ALT/AST >3–8× ULN, a QTc increase of >60 msec, or the emergence of significant clinical symptoms (e.g., hypersensitivity, severe nausea).",

  "How should drug accountability and compliance be documented?":
    "At each visit, returned tablets and capsules are counted, and patient adherence is recorded in the CRF. All discrepancies and dosing logs are maintained per trial SOPs."
};

export default function ChatClientPage() {
  const [selectedStudy, setSelectedStudy] = useState("PROTOCOL-2025-001")
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [chatHistory, setChatHistory] = useState<Chat[]>([])
  const [currentChatId, setCurrentChatId] = useState<number | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleStudyChange = (studyId: string) => {
    setSelectedStudy(studyId)
  }

  const handleNewChat = () => {
    const newChatId = Date.now()
    const newChat: Chat = {
      id: newChatId,
      study: selectedStudy,
      messages: [
        {
          role: 'assistant' as const,
          content: `Hello! I'm your Protocol Assistant for ${selectedStudy}. How can I help you today?`,
        },
      ],
    }
    setChatHistory((prev) => [...prev, newChat])
    setCurrentChatId(newChatId)
    setMessages(newChat.messages)
    setInput("")
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: 'user' as const,
      content: input
    }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)

    // Update chat history
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId ? { ...chat, messages: updatedMessages } : chat
      )
    )

    setInput("")
    setIsLoading(true)

    // Check for hardcoded responses
    const response: Message = {
      role: 'assistant' as const,
      content: PROTOCOL_RESPONSES[input] || `I understand you're asking about "${input}" in relation to ${selectedStudy}. 

Let me help you find that information in the protocol. Could you please specify which aspect you'd like to know more about?`
    }

    setTimeout(() => {
      const newMessages = [...updatedMessages, response]
      setMessages(newMessages)

      // Update chat history with AI response
      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId ? { ...chat, messages: newMessages } : chat
        )
      )

      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentChatId) return;

    // Validate file type
    const fileType = file.type;
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!validTypes.includes(fileType)) {
      alert('Please upload a valid protocol document (PDF or Word)');
      return;
    }

    // Create a message about the file upload
    const fileMessage: Message = {
      role: 'user' as const,
      content: `Uploaded protocol document: ${file.name}`,
      attachments: [{
        name: file.name,
        type: fileType
      }]
    };

    const updatedMessages = [...messages, fileMessage];
    setMessages(updatedMessages);

    // Update chat history with the file upload
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? {
            ...chat,
            messages: updatedMessages,
            documents: [
              ...(chat.documents || []),
              {
                name: file.name,
                type: fileType,
                uploadedAt: new Date().toISOString()
              }
            ]
          }
          : chat
      )
    );

    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const response: Message = {
        role: 'assistant' as const,
        content: `I've received the protocol document "${file.name}". I'll analyze this protocol for you. What would you like to know?`
      };

      const newMessages = [...updatedMessages, response];
      setMessages(newMessages);

      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId ? { ...chat, messages: newMessages } : chat
        )
      );

      setIsLoading(false);
    }, 1000);
  };

  // Function to remove a document
  const handleRemoveDocument = (documentName: string) => {
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? {
            ...chat,
            documents: chat.documents?.filter(doc => doc.name !== documentName)
          }
          : chat
      )
    );
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between space-y-2 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Protocol Assistant</h2>
        <div className="flex gap-2">
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="gap-2"
            variant="outline"
            disabled={!currentChatId}
          >
            <Upload className="h-4 w-4" />
            Upload Protocol
          </Button>
          <Button onClick={handleNewChat} className="gap-2">
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".pdf,.doc,.docx"
        onChange={handleFileUpload}
      />

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Chats</CardTitle>
            <CardDescription>Your conversation history</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <StudySelector selectedStudy={selectedStudy} onSelectStudy={handleStudyChange} />
            <div className="mt-4 space-y-2">
              {chatHistory.map((chat) => (
                <Button
                  key={chat.id}
                  variant={currentChatId === chat.id ? "default" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setCurrentChatId(chat.id)
                    setMessages(chat.messages)
                  }}
                >
                  <Bot className="mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="truncate">Chat {new Date(chat.id).toLocaleTimeString()}</span>
                    {chat.documents && chat.documents.length > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {chat.documents.length} document{chat.documents.length !== 1 ? 's' : ''} uploaded
                      </span>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <CardTitle>{selectedStudy} Assistant</CardTitle>
                  <CardDescription>Ask questions about protocol details and procedures</CardDescription>
                </div>
              </div>
              {currentChatId && chatHistory.find(chat => chat.id === currentChatId)?.documents && (
                <div className="flex flex-wrap gap-2">
                  {chatHistory.find(chat => chat.id === currentChatId)?.documents?.map((doc, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-2">
                      <FileText className="h-3 w-3" />
                      {doc.name}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => handleRemoveDocument(doc.name)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex h-[400px] flex-col space-y-4 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex max-w-[80%] items-start gap-3 rounded-lg px-4 py-2 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                  >
                    {message.role === "assistant" && <Bot className="mt-1 h-5 w-5 shrink-0" />}
                    <div className="space-y-1">
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[80%] items-start gap-3 rounded-lg px-4 py-2 bg-muted">
                    <Bot className="mt-1 h-5 w-5 shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm">Thinking...</p>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Ask a question about the study protocol..."
                className="flex-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <Button size="icon" onClick={handleSendMessage} disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

