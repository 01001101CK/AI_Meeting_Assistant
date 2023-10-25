import RemoveBtn from "./RemoveBtn";

const getSummaries = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/summaries", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch summaries");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading summaries: ", error);
    }
};

export default async function SummaryList () {
    const { summaries } = await getSummaries();

return (
    <>
        {summaries.map((summary) => (
            <div
                key={summary._id}
                className="p-4 border border-violet-600 my-3 flex justify-between gap-10 items-start"
            >
                <div>
                    <h2 className="font-bold text-2xl">{summary.meeting_title}</h2>
                    <div>{summary.summary}</div>
                </div>

                <div className="flex gap-2">
                    <RemoveBtn id={summary._id} />
                </div>
            </div>
        ))}
    </>
)

}