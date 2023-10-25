"use client"
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn ({id}) {
    const router = useRouter();
    const removeSummary = async () => {
        const confirmed = confirm("Are you sure to delete your meeting record?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/summaries?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeSummary} className="text-red-600">
            <HiOutlineTrash size={25} />
        </button>
    );
}