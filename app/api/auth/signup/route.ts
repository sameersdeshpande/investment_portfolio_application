import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // Supabase client instance
import bcrypt from "bcryptjs"; // For hashing passwords

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Check if the user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    // If user exists, return an error
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user with hashed password
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          email: email,     // Assuming your table has an 'email' column
          password: hashedPassword, // Insert the hashed password
        },
      ])
      .select(); // Select ensures you get the inserted data back (optional)

    if (error) {
      console.error("Error inserting user:", error.message);
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.error("SignUp error:", error);
    return NextResponse.json({ error: "An error occurred during sign up" }, { status: 500 });
  }
}
