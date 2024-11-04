import React from 'react'
 
export const menuMindloose =()=>{
    const[isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div className="relative">
           <image src= "/logo192.png" alt="menu" width={32} height={32}/> 
            <div className={"fixed top-0 right-0 h-full w-64 bg-green-50 shadow-lg transform  ${isOpen ? "translate-x-0" : "translate-x-full"} transition-tranform duration-300 ease-in-out lg:hidden z-50 }> </div>
                <div className='flex justify-end p-4'>

                </div>
    )
}