export const metadata = {
    title: "About | Hariharan",
    description: "Learn more about Hariharan S, a Full Stack Developer with a passion for creating innovative web solutions.",
  }
  
  // This layout file will wrap your About page content
  import { ReactNode } from 'react'
  
  interface LayoutProps {
    children: ReactNode
  }
  
  export default function AboutLayout({ children }: LayoutProps) {
    return (
      <div>
        {/* You can add common layout elements like header, footer, etc. */}
        {children}
      </div>
    )
  }
  