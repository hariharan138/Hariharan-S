import { Hero } from "../components/hero"
import { Projects } from "../components/projects"
import { BlogPosts } from "../components/blog-posts"
import { Contact } from "../components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <BlogPosts />
      <Projects />
      <Contact />
    </>
  )
}

