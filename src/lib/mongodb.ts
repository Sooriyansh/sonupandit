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

  const cache = global.mongooseCache!;

  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName: "sonupandit"
    });
  }

  try {
    cache.conn = await cache.promise;
    return cache.conn;
  } catch (error) {
    cache.promise = null;
    throw error;
  }
}
