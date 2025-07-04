export default function Navbar(){
    return (
        <div className="border-b py-1 px-[16px]  flex items-center font-work justify-between text-xs">
            <div className="flex items-center">
                <img src="./Panel.svg" alt="Icon" className="w-6 h-6"/>
                <div className="ml-4 flex gap-[14px] items-center">
                    <span className="flex text-black/40 gap-1">WorkSpace <img src="./Chevron.svg" alt="" /> Folder 2 <img src="./Chevron.svg" alt="" /> <span className="text-black">SpreadSheet 3</span></span>
                    <img src="./Icon-frame.svg" alt="" />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center px-4 py-3 bg-gray-100 rounded-md w-fit">
                    <img src="./search2.svg" alt="" />
                    <input type="text" placeholder="Search within sheet" className="outline-none bg-transparent placeholder-black/60"/>
                </div>
                <div className="relative inline-flex">
                    <img src="./Alert.svg" alt="" />
                    <span className="absolute -top-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#4B6A4F] border-2 border-white text-white text-[10px] font-medium">
                        2
                    </span>
                </div>
                
                <div className="flex  gap-2 ">
                    <div className="w-[28px] h-[28px] bg-[url('./profile.png')] bg-cover bg-center rounded-full ml-2"></div>
                    <div className="flex flex-col gap-0 pr-5">
                        <div>John Doe</div>
                        <div className="mt-[-3px] text-black/50 text-xs">john.doe...</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}