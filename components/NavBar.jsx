import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-violet-600 px-8 py-4">
            <Link className="text-white font-bold" href={"/"}>
                Personal Assistant AI
            </Link>
            <Link className="shadow-xl bg-white p-2 rounded-lg" href={"/addTranscript"}>
                Add Meeting Transcript
            </Link>
        </nav>
    );
}