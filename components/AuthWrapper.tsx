"use client"

import { useState, useEffect } from "react"
import type React from "react" // Added import for React
import SignUp from "./SignUp"
import Login from "./Login"

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth/check")
      if (response.ok) {
        setIsAuthenticated(true)
      }
    }
    checkAuth()
  }, [])

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div>
      {showSignUp ? (
        <SignUp onSuccess={() => setIsAuthenticated(true)} onSwitch={() => setShowSignUp(false)} />
      ) : (
        <Login onSuccess={() => setIsAuthenticated(true)} onSwitch={() => setShowSignUp(true)} />
      )}
    </div>
  )
}

