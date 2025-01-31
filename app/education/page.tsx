import { BlogPosts } from "@/components/blog-posts"

export const metadata = {
  title: "Education | Hariharan",
  description: "Read the latest articles by Hariharan on web development and technology.",
}

export default function BlogPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <BlogPosts />
    </div>
  )
}

