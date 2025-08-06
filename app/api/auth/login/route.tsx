/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
  
  try {
    await connectDB();
    const { username, password } = await req.json();
    console.log('login page',username);

    const user = await User.findOne({ username });
    console.log("🚀 ~ POST ~ username:", user)
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const NEXTAUTH_SECRET:any =process.env.NEXTAUTH_SECRET
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      NEXTAUTH_SECRET,
      { expiresIn: "1d" }
    );
    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    })
    response.cookies.set("token", token,{
        httpOnly:true
    });

    return response;
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return new Response(
      JSON.stringify({ error: error }),
      { status: 500 }
    );
  }
}
