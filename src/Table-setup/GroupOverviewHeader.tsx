import { useState } from "react";

const GroupOverviewHeader = () => {
    const [rotating,setrotating] = useState(false);
    return(
        <div className='flex justify-start gap-2 px-2 '>
            <div className='text-[#545454] flex gap-1 bg-[#EEEEEE] justify-center text-xs items-center w-fit rounded-md py-1 px-1'>
                <img src="Link.svg" alt="" />
                Q3 Financial Overview
            </div>
            <button onClick={() => {
                setrotating(true)
                setTimeout(() => {
                    setrotating(false)
                }, 1000);
            }}>
                <img src="Arrow-Sync.svg" alt=""  className={`${rotating ? "animate-spin" : ""}`}/>
            </button>
                
        </div>
    )
}

export default GroupOverviewHeader