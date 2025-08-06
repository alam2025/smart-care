/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Connection } from "mongoose";

const MONGO_URI:any = process.env.MONGODB_URI;
console.log("🚀 ~ MONGO_URI:", MONGO_URI)

if (!MONGO_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

let cached: {
  conn: Connection | null;
  promise: Promise<typeof mongoose> | any;
} = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

 export default async function connectToDatabase(): Promise<Connection> {
  // If there is an existing connection, return it.
  if (cached.conn) {
    return cached.conn;
  }

  // If there is no promise for a connection, create one.
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI)
      .then((mongoose) => mongoose.connection);
  }

  // Wait for the promise to resolve, then cache and return the connection.
  cached.conn = await cached.promise;

  if (!cached.conn) {
    throw new Error("Failed to establish a database connection.");
  }

  return cached.conn;
}
