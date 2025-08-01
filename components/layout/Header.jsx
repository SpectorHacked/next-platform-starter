import Link from 'next/link'
import { Button } from '../ui/Button'
import { ListOrdered } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-[#0073ea] rounded-lg">
              <ListOrdered className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#323338]">QueueUp</span>
          </Link>
        </div>

        <nav className="flex items-center space-x-8">
          <Link href="/privacy" className="text-sm font-medium text-[#676879] hover:text-[#323338] transition-colors">
            Privacy Policy
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}