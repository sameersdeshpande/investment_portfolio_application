import { Suspense } from "react"
import AuthWrapper from "@/components/AuthWrapper"
import Portfolio from "@/components/Portfolio"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Investment Portfolio</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthWrapper>
          <Portfolio />
        </AuthWrapper>
      </Suspense>
    </main>
  )
}

