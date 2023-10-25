import mongoose, { Schema } from "mongoose";

const summarySchema = new Schema(
    {
        meeting_title: String,
        summary: String,
    },
    {
        timestamps: true,
    }
);

const Summary = mongoose.models.Summary || mongoose.model("Summary", summarySchema);

export default Summary;