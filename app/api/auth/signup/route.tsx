/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse, } from "next/server";
import jwt from "jsonwebtoken";



export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { email, password, username,phone } = await req.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        console.log("🚀 ~ POST ~ existingUser:", existingUser)
        if (existingUser) {
            return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
        }

        // Create a new user
        const newUser = new User({ email, password, username, phone });
        const user = await newUser.save();
        console.log("🚀 ~ POST ~ user:", user)

        //login 
        const NEXTAUTH_SECRET: any = process.env.NEXTAUTH_SECRET
        const token = jwt.sign(
            { id: user._id, email: user.email, username },
            NEXTAUTH_SECRET,
            { expiresIn: "1d" }
        );
        const response = NextResponse.json({
            message: "User created successfully",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true
        });


        return response;
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}

