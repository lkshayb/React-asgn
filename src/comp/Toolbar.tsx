import { useState } from "react"

export default function Toolbar({settogglefields}:{settogglefields : React.Dispatch<React.SetStateAction<boolean>>}){
    const [tools,settools] = useState(true);
    return(
        <div className="border-b py-[4px] pl-[16px] pr-[10px] flex items-center justify-between font-work gap-4 text-sm">
            <div className="flex items-center gap-4 ">
                <button onClick={() => settools(e => !e)} className="hover:text-black/60 duration-300 flex items-center gap-1">
                    <span>Tool bar</span>
                    <img className={`${tools ? "" : "rotate-180"} duration-300`} src="./forward.svg" alt="" />
                </button>
                <div className="h-6 w-[0.5px] bg-black/10"></div>
                <div className={`${tools ? "opacity-100 " : "opacity-0"} duration-300 flex gap-7`}>
                    <button onClick={() => {
                        settogglefields(e => !e)
                        console.log("Toggle Fields")
                    }} className="flex gap-1 items-center hover:text-black/60 duration-300">
                        <img src="./Eye.svg" alt="" />
                        <span>Hide fields</span>
                    </button>
                    
                    <button onClick={() => console.log("Sort button (toggle sorting of data")} className="flex items-center gap-1 hover:text-black/60 duration-300">
                        <img src="./darrow.svg" alt="" />
                        <span>Sort</span>
                    </button>

                    <button onClick={() => console.log("Filter button (Change Filters for table")} className="flex items-center gap-1 hover:text-black/60 duration-300">
                        <img src="./Filter.svg" alt="" />
                        <span>Filter</span>
                    </button>

                    <button onClick={() => console.log("Cell view button (Toggle Cell View")} className="flex items-center gap-1 hover:text-black/60 duration-300">
                        <img src="./Arrow-Autofit.svg" alt="" />
                        <span>Cell view</span>
                    </button>
                </div>
            </div>
            <div className="flex gap-2">
                <button onClick={() => console.log("Import Button (Import your file)")} className="flex gap-1 border rounded-lg py-1 pl-2 pr-3 text-[#545454] whitespace-nowrap hover:bg-gray-100 duration-300 hover:border-black/40">
                    <img src="./Arrow-Download.svg" alt="" />
                    Import
                </button>
                <button onClick={() => console.log("Export Button (Exort your file)")} className="flex gap-1 border rounded-lg py-1 pl-2 pr-3 text-[#545454] whitespace-nowrap hover:bg-gray-100 duration-300 hover:border-black/40">
                    <img src="./Arrow-Upload.svg" alt="" />
                    Export
                </button>
                <button onClick={() => console.log("Share Button (Share your file)")} className="flex gap-1 border rounded-lg py-1 pl-2 pr-3 text-[#545454] whitespace-nowrap hover:bg-gray-100 duration-300 hover:border-black/40">
                    <img src="./Share.svg" alt="" />
                    Share
                </button>
                <button onClick={() => console.log("New Action Button (Create a new action)")} className=" flex gap-1 rounded-lg py-1 pl-2 pr-3 text-white bg-[#4B6A4F] whitespace-nowrap hover:bg-[#608064] duration-300">
                    <img src="./Arrow-Split.svg" alt="" />
                    <p className="flex">New Action</p>
                </button>
            </div>
            
        </div>
    )
}