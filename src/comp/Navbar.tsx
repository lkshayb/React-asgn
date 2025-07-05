export default function Navbar(){
    return (
        <div className="border-b py-1 px-[16px]  flex items-center font-work justify-between text-xs">
            <div className="flex items-center">
                <img src="./Panel.svg" alt="panel   " className="w-6 h-6"/>
                <div className="ml-4 flex gap-[14px] items-center">
                    <span className="flex text-black/40 gap-1 ">
                        <span className="hover:text-black hover:cursor-pointer duration-300">WorkSpace</span>
                        <img src="./Chevron.svg" alt="chevron" /> 
                        <span className="hover:text-black hover:cursor-pointer duration-300">Folder 2</span> 
                        <img src="./Chevron.svg" alt="chevron" /> 
                        <span className="hover:text-black hover:cursor-pointer duration-300">SpreadSheet 3</span>
                    </span>
                    <img src="./Icon-frame.svg" className="hover:cursor-pointer" alt="icon frame" />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div  className="hover:ring-[1px] hover:ring-black/30 flex gap-2 items-center px-4 py-3 bg-gray-100 rounded-md w-fit">
                    <img src="./search2.svg" alt="search2" />
                    <input type="text" placeholder="Search within sheet" className="outline-none bg-transparent placeholder-black/60"/>
                </div    >
                <button className="relative inline-flex " onClick={() => console.log("Notification Bell")}>
                    <img src="./Alert.svg" alt="alert" />
                    <span className="absolute -top-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#4B6A4F] border-2 border-white text-white text-[10px] font-medium">
                        2
                    </span>
                </button>
                
                <button onClick={() => console.log("User Profile")} className="flex  gap-2 ">
                    <div  className="w-[28px] h-[28px] bg-[url('./profile.svg')] bg-cover bg-center rounded-full ml-2"></div >
                    <div className="flex flex-col gap-0 pr-5">
                        <div>John Doe</div>
                        <div className="mt-[-3px] text-black/50 text-xs">john.doe...</div>
                    </div>
                    
                </button>
            </div>
        </div>
    )
}