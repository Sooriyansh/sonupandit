import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const bookingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    email: { type: String, trim: true, lowercase: true, maxlength: 160 },
    service: { type: String, required: true, trim: true, maxlength: 120 },
    date: { type: String, required: true, trim: true },
    time: { type: String, trim: true, maxlength: 40 },
    location: { type: String, trim: true, maxlength: 180 },
    message: { type: String, trim: true, maxlength: 1000 },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
      index: true
    }
  },
  { timestamps: true }
);

bookingSchema.index({ createdAt: -1, _id: -1 });

export type BookingDocument = InferSchemaType<typeof bookingSchema>;

export const Booking: Model<BookingDocument> =
  mongoose.models.Booking || mongoose.model<BookingDocument>("Booking", bookingSchema);
