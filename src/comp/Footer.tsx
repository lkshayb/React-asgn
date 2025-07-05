import { useState } from "react";

export default function Footer(){
    const [activeTab, setActiveTab] = useState("All Orders");
    const focusClasses = "bg-[#E8F0E9] text-[#3E5741] border-t-[3px] border-[#3E5741]";

    return(
        <div className="border-t-2 border-gray-100 pt-2 flex">
            <button onClick={() => {
                setActiveTab("All Orders")
                console.log("All Orders Toggle Button")
            }} className={`ml-9 hover:cursor-pointer hover:bg-gray-200 flex px-4 justify-center font-semibold text-[#757575] text-md py-2 ${activeTab === "All Orders" ? focusClasses : ""}`}>
                All Orders
            </button>
            <button onClick={() => {
                setActiveTab("Pending")
                console.log("Pending Toggle Button")
            }} className={`hover:cursor-pointer hover:bg-gray-200 flex px-4 justify-center font-semibold text-[#757575] text-md py-2 ${activeTab === "Pending" ? focusClasses : ""}`}>
                Pending
            </button>
            <button onClick={() => {
                setActiveTab("Reviewed")
                console.log("Reviewed Toggle Button")
            }}  className={`hover:cursor-pointer hover:bg-gray-200 flex px-4 justify-center font-semibold text-[#757575] text-md py-2 ${activeTab === "Reviewed" ? focusClasses : ""}`}>
                Reviewed
            </button>
            <button onClick={() => {
                setActiveTab("Arrived")
                console.log("Arrived Toggle Button")
            }}  className={`hover:cursor-pointer hover:bg-gray-200 flex px-4 justify-center font-semibold text-[#757575] text-md py-2 ${activeTab === "Arrived" ? focusClasses : ""}`}>
                Arrived
            </button>
            <button onClick={() => {
                setActiveTab("Add")
                console.log("Add Toggle Button")
            }}  className={`hover:cursor-pointer hover:bg-gray-200 flex px-4 justify-center font-semibold text-[#757575] text-md py-2.5 ${activeTab === "Add" ? focusClasses : ""}`}>
                <img src="./Add.svg" alt="" />
            </button>
        </div>
    )
}