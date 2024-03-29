import { Schema } from "mongoose";
import mongoose from "mongoose";

const schema = new Schema(
  {
    name: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

// model
export const dataModel = mongoose.model("data", schema);
