  'use client'
  import Link from "next/link"
  import { ThemeToggle } from "./theme-toggle"
  import { useState } from "react"
  import { Menu, X } from 'lucide-react'
  import { Button } from "../components/ui/button"

  export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between p-5">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold sm:inline-block">Hariharan</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <ThemeToggle />
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center space-y-4 p-4">
              <NavLinks />
              <ThemeToggle />
            </nav>
          </div>
        )}
      </header>
    )
  }

  function NavLinks() {
    return (
      <>
        <Link
          href="/"
          className="hover:text-foreground/80 text-foreground/60 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="hover:text-foreground/80 text-foreground/60 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/education"
          className="hover:text-foreground/80 text-foreground/60 transition-colors"
        >
          Education
        </Link>
        <Link
          href="/about"
          className="hover:text-foreground/80 text-foreground/60 transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-foreground/80 text-foreground/60 transition-colors"
        >
          Contact
        </Link>
      </>
    )
  }

