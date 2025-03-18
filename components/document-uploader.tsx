"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function DocumentUploader() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const simulateUpload = () => {
    setUploading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-6 text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-2">
          <Upload className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-1 text-lg font-semibold">Upload Documents</h3>
        <p className="mb-4 text-sm text-muted-foreground">Drag and drop files or click to browse</p>
        <input id="file-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
        <Button asChild>
          <label htmlFor="file-upload">Select Files</label>
        </Button>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Selected Files</h4>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between rounded-md border p-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm">{file.name}</span>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(index)}>
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>

          {uploading ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Uploading...</span>
                <span className="text-sm">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          ) : (
            <Button className="w-full" onClick={simulateUpload}>
              Upload {files.length} {files.length === 1 ? "File" : "Files"}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

