import mongoose from "mongoose";

declare global {
  var mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}

export async function connectMongo() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not configured.");
  }

  if (global.mongooseCache?.conn) {
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache?.promise) {
    global.mongooseCache!.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName: "sonupandit"
    });
  }

  global.mongooseCache!.conn = await global.mongooseCache!.promise;
  return global.mongooseCache!.conn;
}
