import { Projects } from "@/components/projects"

export const metadata = {
  title: "Projects | Hariahran",
  description: "Explore the projects created by Hariharan, a MERN Stack Developer.",
}

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <Projects />
    </div>
  )
}

