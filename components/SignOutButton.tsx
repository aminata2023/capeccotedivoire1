'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/api/auth/signin' })}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Sign out
    </button>
  )
} 