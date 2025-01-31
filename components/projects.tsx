'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import Image, { StaticImageData } from "next/image"
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

import trust from "../components/assets/trust.png"
import quiz from "../components/assets/quiz.png"
import sharetext from "../components/assets/sharetext.png"
import admin from "../components/assets/admin.png"
import yt from "../components/assets/yt.png"
import appointment from "../components/assets/appoint.png"

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  image: string | StaticImageData // Accept both string URLs and StaticImageData
}

const projects: Project[] = [
  {
    title: "Trust App",
    description: "A platform connecting users with registered trusts for seamless food donations. Core features include user registration, trust management, and real-time notifications.",
    tags: ["React.js", "Node.js", "MongoDB", "ExpressJs", "MUI"],
    link: "https://github.com/hariharan138/GlobalTrust",
    image: trust,
  },
  {
    title: "Quiz App",
    description: "A React-based skill evaluation app featuring dynamic question tracking, time management, and score calculation.",
    tags: ["React.js", "JavaScript", "CSS", "NodeJs", "ExpressJs", "MongoDB"],
    link: "https://quiz-app13.vercel.app/",
    image: quiz,
  },
  {
    title: "YouTube Search App",
    description: "An app that allows users to search for YouTube videos, leveraging the YouTube Data API for seamless interaction.",
    tags: ["React.js", "YouTube API", "JavaScript"],
    link: "https://ytpv1.vercel.app",
    image: yt, // Placeholder for YouTube app; replace with actual image if available
  },
  {
    title: "ShareText",
    description: "A simple and efficient text-sharing app, allowing users to share snippets of text across devices seamlessly.",
    tags: ["React.js", "JavaScript", "CSS", "NodeJs", "ExpressJs", "MongoDB"],
    link: "https://sharetexts.vercel.app/",
    image: sharetext,
  },
  {
    title: "Admin Dashboard",
    description: "A responsive admin dashboard with real-time analytics, user management, and data visualization.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/hariharan138/Role-BasedAccessControl",
    image: admin,
  },
  {
    title: "Appointment Management App",
    description: "A streamlined app for managing appointments with features like scheduling, notifications, and user management.",
    tags: ["React.js", "MongoDB", "Node.js", "Express.js"],
    link: "https://github.com/hariharan138/appointment-management",
    image: appointment,
  }
]

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleProjectExpansion = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title)
  }

  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">My Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {project.title}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleProjectExpansion(project.title)}
                    aria-expanded={expandedProject === project.title}
                    aria-controls={`project-description-${index}`}
                  >
                    {expandedProject === project.title ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {expandedProject === project.title ? "Collapse" : "Expand"} project description
                    </span>
                  </Button>
                </CardTitle>
                <CardDescription
                  id={`project-description-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedProject === project.title ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={`${project.title}-${i}`} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                    <span className="sr-only">View {project.title} project (opens in new tab)</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
