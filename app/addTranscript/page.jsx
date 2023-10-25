"use client"
import {useState} from 'react';

export default function addTranscript () {
    const [title, setTitle] = useState("");
    const [transcript, setTranscript] = useState("");



    return (
        <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-5">
                <label htmlFor="meetingTitle">Meeting Title</label>
                <input
                    id="meetingTitle"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border border-violet-600 px-4 py-2"
                    type="text"
                    placeholder="Enter Meeting Title"
                />

                <label htmlFor="meetingTranscript">Meeting Transcript</label>
                <textarea
                    id="meetingTranscript"
                    onChange={(e) => setTranscript(e.target.value)}
                    value={transcript}
                    className="border border-violet-600 px-4 py-2 resize-y"
                    placeholder="Enter Meeting Transcript"
                    rows="20"
                />

                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                >
                    Send
                </button>
            </form>
        </div>
    )
}