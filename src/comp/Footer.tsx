export default function Footer(){
    return(
        <div className="border-t-2 border-gray-100 pt-1 flex">
            <div className="ml-9 bg-[#E8F0E9] flex w-auto px-4 justify-center font-semibold text-[#3E5741] text-md py-2 border-t-[3px] border-[#3E5741]  ">
                All Orders
            </div>
            <div className="flex px-4 justify-center font-semibold text-[#757575] text-md py-2">
                Pending
            </div>
            <div className="flex w-auto justify-center font-semibold text-[#757575] text-md py-2 px-4">
                Reviewed
            </div>
            <div className="flex w-auto justify-center font-semibold text-[#757575] text-md py-2 px-4">
                Arrived
            </div>
            <div className="flex w-auto justify-center font-semibold text-[#757575] text-md py-2 px-4">
                <img src="./Add.svg" alt="" />
            </div>
        </div>
    )
}