import type { ColumnDef} from '@tanstack/react-table'
import type { JobRequest } from "./types";



export const columns: ColumnDef<JobRequest>[] =  [
    {
        id:"+",
        header:() => (
            <div className='w-[32px]'>

            </div>
        ),
        columns:[
            {
        accessorKey: '#',
        header: () => (
            <div className='flex justify-center'>
                <img src="./Number-Symbol.svg" className="w-[16px] h-[16px]"/>
            </div>
            
        ),
        cell: ({ getValue }) => {
            const hash = getValue() as number;
            return (
                <span className='text-[#757575]'>
                    {hash}
                </span>
            );
        },
    },
        ]
    },
    
    {
        id:"group-overview",
        header:() => (
            <div className='flex justify-start gap-2 px-2 '>
                <div className='text-[#545454] flex gap-1 bg-[#EEEEEE] justify-center items-center w-fit rounded-md py-1 px-1'>
                    <img src="Link.svg" alt="" />
                    Q3 Financial Overview
                </div>
                <img src="Arrow-Sync.svg" alt="" />
            </div>
        ),
        columns:[
            {   
                accessorKey: 'jobRequest',
                header: () => (
                    <div className='flex items-center justify-between px-2 py-2 font-semibold text-[#757575] w-[256px]'>
                        <div className='flex gap-1 items-center' >
                            <img src="./Briefcase.svg" className="w-[16px] h-[16px] mx-auto"/>
                            Job Request
                        </div>
                        <div>
                            <img src="./Chevron.svg" className="rotate-90 h-[12px] w-[12px]" alt="" />
                        </div>
                    </div>      
                ),
            },
            {
                accessorKey: 'submitted',
                header: () => (
                    <div className='flex items-center justify-between px-2 font-semibold py-2 text-[#757575] w-[131px]'>
                        <div className='flex gap-1 items-center'>
                            <img src="./Calendar.svg" className="w-[16px] h-[16px] mx-auto"/>
                            Submitted
                        </div>
                        <div>
                            <img src="./Chevron.svg" className="rotate-90 h-[12px] w-[12px]" alt="" />
                        </div>
                    </div>         
                ),
            },
            {
                accessorKey:'status',
                header: () => (
                    <div className='flex items-center font-semibold justify-between px-2 py-2 text-[#757575] w-[131px]'>
                        <div className='flex gap-1 items-center'>
                            <img src="./Chevron-Circle.svg" className="w-[16px] h-[16px] mx-auto"/>
                            Status
                        </div>
                        <div>
                            <img src="./Chevron.svg" className="rotate-90 h-[12px] w-[12px]" alt="" />
                        </div>   
                    </div>
                    
                ),
                cell: ({ getValue }) => {
                    const status = getValue() as string;

                    const colorMap: Record<string, string> = {
                        "In-process": "bg-[#FFF3D6] text-[#85640B] ",
                        "Need to start": "bg-[#E2E8F0] text-[#475569]",
                        "Complete": "bg-[#D3F2E3] text-[#0A6E3D]",
                        "Blocked": "bg-[#FFE1DE] text-[#C22219]",
                    };

                    return (
                        <div className={`text-xs px-2  font-medium rounded-full ${colorMap[status] ?? ""}`}>
                            {status}
                        </div>
                    );
                }
            },
            {
                header: () => (
                    <div className='flex items-center justify-between px-2 py-2  text-[#757575] w-[131px]'>
                        <div className='flex gap-1 items-center'>
                            <img src="./Person.svg" className="w-[16px] h-[16px] mx-auto"/>
                            Submitter
                        </div>
                        <div>
                            <img src="./Chevron.svg" className="rotate-90 h-[12px] w-[12px]" alt="" />
                        </div>
                    </div> 
                ),
                accessorKey: "submitter",
                
            },
        ]
    },
    
    
    
    
    {   id:"group-url",
        header : () => (
            <div className=' w-[131px]'>

            </div>
        ),
        columns :[
            {
                accessorKey: "url",
                header: () => (
                    <div className='flex items-center justify-between px-2 py-2 w-[131px]  text-[#757575]'>
                        <div className='flex gap-1 items-center'>
                            <img src="./Globe.svg" className="w-[16px] h-[16px] mx-auto"/>
                            URL
                        </div>
                        <div>
                            <img src="./Chevron.svg" className="rotate-90 h-[12px] w-[12px]" alt="" />
                        </div>
                        
                    </div>
                ),
                cell: ({ getValue }) => {
                    const url = getValue() as string;
                    return (
                        <a href={`https://${url}`} className="underline" target="_blank">
                            {url}
                        </a>
                    );
                },
            }
        ]     
    },

    {   id:"group-abc",
        header:() => (
            <div className='flex items-center justify-center px-2 py-2 text-[#695149] w-[131px]'>
                <div className='flex gap-1 items-center'>
                    <img src="./Arrow-Split-2.svg" className='fill-[#A3ACA3]' alt="" />
                    ABC
                    <img src="./Icon_frame.svg" alt="" />
                </div>  
            </div>
        ),
        columns:[
            {   
                accessorKey:"assigned",
                header:() => (
                    <div className='flex items-center justify-left px-2 py-2 bg-[#E8F0E9] text-[#666C66] w-[131px]'>
                    
                        <div className=' flex gap-1 items-center'>
                            <img src="./Emoji.svg" className="w-[16px] h-[16px] mx-auto"/>
                            Assigned
                        </div>

                    </div>
            
        )
            }
        ],
        
    },

    {   id:"group-ques",
        header: () => (
            <div className='flex items-center justify-center px-2 py-2  text-[#463E59] w-[100%]'>
                <div className='flex gap-1 items-center'>
                    <img src="./Arrow-Split.svg" alt="" />
                    Answer a question
                    <img src="./Icon_frame.svg" alt="" />
                </div>  
            </div>
        ),
        columns: [
            {
                accessorKey: "priority",
                header: () => (
                    <div className='px-2 py-2 bg-[#EAE3FC] text-[#655C80] w-[131px]'>
                        <div className='flex gap-1 items-center'>
                            Priority
                        </div>  
                    </div>
                ),
                 cell: ({ getValue }) => {
                    const priority = getValue() as string;

                    const colorMap: Record<string, string> = {
                        "Medium": "text-[#C29210] ",
                        "High": " text-[#EF4D44]",
                        "Low": " text-[#1A8CFF]",
                    };

                    return (
                        <div className={`text-xs px-2  font-semibold  ${colorMap[priority] ?? ""}`}>
                            {priority}
                        </div>
                    );
                }
            },
            {
                accessorKey: "dueDate",
                header: () => (
                    <div className='px-2 py-2 bg-[#EAE3FC] text-[#655C80] w-[131px]'>
                        Due Date 
                    </div>
                ),
            }
        ],
        
    },
    
    {   id:"group-val",
        header: () => (
            <div className='flex items-center justify-center px-2 py-2  text-[#695149] w-[131px]'>
                <div className='flex gap-1 items-center'>
                    <img src="./Arrow-Split.svg" alt="" />
                    Extract
                    <img src="./Icon_frame.svg" alt="" />
                </div>  
            </div>
            
        ),
        columns: [
            {
                accessorKey: "estValue",
                
                header: () => (
                    <div className='flex items-center justify-left px-2 py-2 bg-[#FFE9E0] text-[#695149] w-[131px]'>
                        <div className='flex gap-1 items-center'>
                            Est. Value
                        </div>  
                    </div>
                ),
            },
        ],
        
    },

    {   id: "group-add",
        header: () => (
                <div className='flex items-center justify-center px-2 py-2  text-[#655C80] w-[131px]'>
                    <img src="Add.svg" alt="" className='h-[20px] w-[20px]'/>  
                </div>
            ),
        columns: [
            {
                accessorKey: "+",
                
                header: () => (
                <div className="flex items-center justify-left px-2 py-2 bg-white text-white w-[131px]">
                    
                </div>
                ),
            },
        ],
    },
    
]
