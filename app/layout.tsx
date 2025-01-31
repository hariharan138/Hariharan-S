
import { Inter } from 'next/font/google'
import { Header } from "../components/header" 
import { ThemeProvider } from "../providers/theme-provider"
import { Toaster } from "../components/ui/toaster"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hariharan | MERN Stack Developer",
  description: "Portfolio of Hariharan, a MERN Stack Developer specializing in building modern web applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">{children}</main>
            <footer className="py-6 md:py-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built by Hariharan. The source code is available on {" "}
                  <a
                    href="https://github.com/hariharan138/Hariharan-portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

