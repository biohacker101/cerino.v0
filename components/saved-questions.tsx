"use client"

import { useState } from "react"
import { HelpCircle, MoreHorizontal, Send, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SavedQuestions() {
  const [savedQuestions, setSavedQuestions] = useState([
    {
      id: 1,
      question: "What are the inclusion criteria for the study?",
      category: "Protocol",
      favorite: true,
    },
    {
      id: 2,
      question: "Where do I file the signed informed consent forms?",
      category: "Documentation",
      favorite: true,
    },
    {
      id: 3,
      question: "What is the procedure for reporting serious adverse events?",
      category: "Safety",
      favorite: false,
    },
    {
      id: 4,
      question: "What are the required lab tests at the screening visit?",
      category: "Procedures",
      favorite: false,
    },
    {
      id: 5,
      question: "What is the window for follow-up visits?",
      category: "Procedures",
      favorite: false,
    },
  ])

  const toggleFavorite = (id: number) => {
    setSavedQuestions(savedQuestions.map((q) => (q.id === id ? { ...q, favorite: !q.favorite } : q)))
  }

  return (
    <div className="space-y-2">
      {savedQuestions.map((question) => (
        <div key={question.id} className="flex items-center justify-between rounded-md border p-2 hover:bg-muted/50">
          <div className="flex items-start gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground"
              onClick={() => toggleFavorite(question.id)}
            >
              <Star className={`h-4 w-4 ${question.favorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
              <span className="sr-only">{question.favorite ? "Remove from favorites" : "Add to favorites"}</span>
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">{question.question}</span>
              </div>
              <span className="text-xs text-muted-foreground">{question.category}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Send className="h-4 w-4" />
              <span className="sr-only">Ask</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

