import { Contact } from "@/components/contact"

export const metadata = {
  title: "Contact | Hariharan",
  description: "Get in touch with Hariharan for collaboration or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <Contact />
    </div>
  )
}

