'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea" // Ensure this path is correct
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function AboutPage() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)
  

  const skills = [
    {
      title: "Frontend Development",
      description: "Proficient in React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, and responsive frameworks like Tailwind CSS and ShadCN.",
    },
    {
      title: "Backend Development",
      description: "Experience with Node.js, Express.js, and MongoDB for building scalable and efficient solutions.",
    },
    {
      title: "Database Management",
      description: "Skilled in working with MongoDB and MySQL for efficient data storage and retrieval.",
    },
    {
      title: "Cloud Technologies",
      description: "Azure Fundamentals and AWS Academy certifications, with deployment experience on platforms like Vercel.",
    },
    {
      title: "Collaborative Tools",
      description: "Familiar with Git, GitHub, and modern development workflows for effective team collaboration.",
    },
  ]

  const timeline = [
    { year: 2024, event: "Started learning web development" },
    { year: 2024, event: "Completed first internship as a Frontend Developer" },
    { year: 2024, event: "Launched first major project: Trust App" },
    { year: 2025, event: "Continuing to expand skills and take on new challenges" },
  ]

  const toggleSkill = (title: string) => {
    setExpandedSkill(expandedSkill === title ? null : title)
  }

  return (
    <div className="container py-12 space-y-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Hi, I&apos;m Hariharan S, a passionate Frontend Developer and Visual Designer with a strong foundation in
            creating intuitive, accessible, and visually appealing web applications. With hands-on experience in both web
            design and development, I thrive on building seamless user experiences and solving real-world challenges through technology.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Expertise</CardTitle>
          <CardDescription>Click on each skill to learn more</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map((skill) => (
            <Card key={skill.title} className="overflow-hidden">
              <CardHeader className="cursor-pointer" onClick={() => toggleSkill(skill.title)}>
                <CardTitle className="flex justify-between items-center">
                  {skill.title}
                  {expandedSkill === skill.title ? <ChevronUp /> : <ChevronDown />}
                </CardTitle>
              </CardHeader>
              <AnimatePresence>
                {expandedSkill === skill.title && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {timeline.map((item, index) => (
              <li key={index} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{item.year}</time>
                <p className="mb-4 text-base font-normal">{item.event}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>


    </div>
  )
}
