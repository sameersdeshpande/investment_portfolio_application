import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { createSession } from "@/lib/session"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()  // Get the email and password from the request body

    // Create a new user in Supabase with email and password
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })  // Return error if signup fails
    }

// In your POST method after successful signup
const user = data?.user
const session = data?.session

if (!user || !session) {
  throw new Error("User or session data missing after signup.")
}

const payload = {
  email: user?.email || "default@example.com",  // Default value if undefined
  user_id: user?.id || "default_user_id",       // Default value if undefined
}

console.log("Payload for session:", payload)  // Inspect payload
await createSession(payload)

    return NextResponse.json({ message: "Signup successful", user })  // Return success message with user data
  } catch (error) {
    console.error("Error during signup:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })  // Handle unexpected errors
  }
}
