import { Schema, model } from "mongoose";

const schema = new Schema({
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  forms: [{ type: String }],
  createdAt: { type: Date, default: Date.now, required: true },
})

// model name, schema, collection name
export const Projects = model("Project", schema, 'projects');