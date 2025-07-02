
export default function Toolbar(){
    return(
        <div className="border-b py-[5px] pl-[16px] pr-[10px] flex items-center justify-between font-work gap-4 text-sm">
            <div className="flex items-center gap-4 ">
                <div className="flex items-center gap-1">
                    <span>Tool bar</span>
                    <img src="./forward.svg" alt="" />
                </div>
                <div className="h-6 w-[0.5px] bg-black/10"></div>
                <div className="flex gap-7">
                    <div className="flex gap-1 items-center">
                        <img src="./Eye.svg" alt="" />
                        <span>Hide fields</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                        <img src="./darrow.svg" alt="" />
                        <span>Sort</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src="./Filter.svg" alt="" />
                        <span>Filter</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src="./Arrow-Autofit.svg" alt="" />
                        <span>Cell view</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="flex gap-1 border rounded-lg py-2 pl-2 pr-3 text-[#545454] whitespace-nowrap">
                    <img src="./Arrow-Download.svg" alt="" />
                    Import
                </button>
                <button className="flex gap-1 border rounded-lg py-2 pl-2 pr-3 text-[#545454] whitespace-nowrap">
                    <img src="./Arrow-Upload.svg" alt="" />
                    Export
                </button>
                <button className="flex gap-1 border rounded-lg py-2 pl-2 pr-3 text-[#545454] whitespace-nowrap">
                    <img src="./Share.svg" alt="" />
                    Share
                </button>
                <button className=" flex gap-1 rounded-lg py-2 pl-2 pr-3 text-white bg-[#4B6A4F] whitespace-nowrap">
                    <img src="./Arrow-Split.svg" alt="" />
                    <p className="flex">New Action</p>
                </button>
            </div>
            
        </div>
    )
}