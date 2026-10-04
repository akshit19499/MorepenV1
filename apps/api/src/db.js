import mongoose from "mongoose";

export async function connectDatabase() {
  if (!process.env.MONGODB_URI) {
    return { connected: false, reason: "MONGODB_URI not set" };
  }

  await mongoose.connect(process.env.MONGODB_URI);
  return { connected: true };
}
