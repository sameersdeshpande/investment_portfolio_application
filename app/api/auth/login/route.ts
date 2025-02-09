import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // Supabase client instance
import bcrypt from "bcryptjs"; // For comparing hashed passwords

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Fetch the user from the database by email
    const { data: user, error } = await supabase
      .from("users")
      .select("email, password")
      .eq("email", email)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Compare the entered password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Successfully authenticated
    return NextResponse.json({ message: "Logged in successfully" });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 });
  }
}
