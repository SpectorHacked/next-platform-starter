import Link from 'next/link'
import { ListOrdered } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#f6f7fb] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-[#0073ea] rounded-lg">
                <ListOrdered className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#323338]">QueueUp</span>
            </div>
            <p className="text-sm text-[#676879] max-w-xs">
              Smart content management that learns your schedule and suggests the perfect time to consume your queue.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#323338] mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Features</Link></li>
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Mobile App</Link></li>
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Browser Extension</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#323338] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">About</Link></li>
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Blog</Link></li>
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#323338] mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Help Center</Link></li>
              <li><Link href="/privacy" className="text-sm text-[#676879] hover:text-[#323338]">Privacy Policy</Link></li>
              <li><Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e1e4e9] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#676879]">© 2024 QueueUp. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-[#676879] hover:text-[#323338]">Privacy</Link>
            <Link href="/" className="text-sm text-[#676879] hover:text-[#323338]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}