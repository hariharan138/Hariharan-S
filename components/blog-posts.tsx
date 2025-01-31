import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPost {
  title: string
  description: string
  date: string
  readTime: string
  link: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Panimalar Engineering College",
    description: "Computer and Communication Engineering",
    date: "2024 passed out",
    readTime: "CGPA - 8.33",
    link: "https://www.linkedin.com/in/hari-haran-4aab64269/"
  },
  {
    title: "Sri Vidhya Mandhir Matric Hr Sec School",
    description: "HSC",
    date: "2020 passed out",
    readTime: "Percentage-63",
    link: "https://www.linkedin.com/in/hari-haran-4aab64269/"
  },
  {
    title: "Sri Vivekandha Matric Hr Sec School",
    description: "SSLC",
    date: "2019 passed out",
    readTime: "Percentage-82",
    link: "https://www.linkedin.com/in/hari-haran-4aab64269/"
  }
]

export function BlogPosts() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Education</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {post.date} · {post.readTime}
                </p>
                <a href={post.link} className="text-primary hover:underline">
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

