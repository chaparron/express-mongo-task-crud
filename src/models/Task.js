import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    // le creará automáticamente el createdAt y updatedAt
    versionKey: false,
    // para evitar que Mongoose cree el __v:0
  }
);

export default model("Task", taskSchema);
