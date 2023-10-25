"use client"
import {useState} from 'react';
import { useRouter } from "next/navigation";
import { HfInference } from "@huggingface/inference";
const dotenv = require('dotenv');
dotenv.config();

export default function addTranscript () {
    const [title, setTitle] = useState("");
    const [transcript, setTranscript] = useState("");
    const [resultSummary, setResultSummary] = useState("");
    const url = 'https://api-inference.huggingface.co/models/knkarthick/MEETING_SUMMARY';
    const inference = new HfInference(process.env.TOKEN);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !transcript) {
            alert("Title and transcript are required, please.");
            return;
        }

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`
                },
                method: 'POST',
                body: JSON.stringify(transcript),
            });
            const result = await response.json();
            console.log(result[0].summary_text)
            setResultSummary(result[0].summary_text)
            return result;
        } catch (error) {
            console.error('Error during API request:', error);
            throw error;
        }
    }

    const handleClick = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/summaries", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ meeting_title: title, summary: resultSummary }),
            });

            if (response.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to create a summary");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col gap=5" >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border border-violet-600 px-8 py-2"
                    type="text"
                    placeholder="Meeting Title"
                />

                <textarea
                    onChange={(e) => setTranscript(e.target.value)}
                    value={transcript}
                    className="border border-violet-600 px-8 py-2 sm:px-4 sm:py-1 md:px-6 md:py-2 lg:px-8 lg:py-2 xl:px-10 xl:py-3 resize-y"
                    placeholder="Meeting Transcript"
                    rows="20"
                />

                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                >
                    Send
                </button>
            </form>
            <br />
            <div>
                <button
                    type="submit"
                    onClick={handleClick}
                    className="bg-violet-600 font-bold text-white py-3 px-6 w-fit"
                >
                    Summarize
                </button>
            </div>
        </div>
    );
}