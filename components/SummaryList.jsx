import RemoveBtn from "./RemoveBtn";


export default function SummaryList () {
return (
<div className="p-4 border border-violet-600 my-3 flex justify-between gap-10 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">Meeting Title</h2>
                        <div>
                            <h4>Meeting Summary</h4>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn />
                    </div>
                </div>
)

}