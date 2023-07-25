import { BsFillMortarboardFill } from "react-icons/bs";
import { BiSolidUserCircle, BiHomeAlt, BiCog } from "react-icons/bi"
import { AiOutlinePlusCircle, AiOutlineBell } from "react-icons/ai"
import Link from "next/link";

export default function DashboardSidebar(){

    return (

        <>
        
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        <a href="#" title="home">
                            <div className="flex items-center" style={{ fontSize: "20px" }}>
                                <span className="mr-2"><BsFillMortarboardFill style={{ fontSize: "25px", color: "#4f46e5" }} /></span>
                                <span><b>Tasued-Cbt-Practice</b></span>
                            </div>
                        </a>
                    </div>

                    <div className="mt-8 text-center">
                        <div className="flex items-center justify-center">

                            <BiSolidUserCircle style={{ fontSize: "100px", color: "#4f46e5" }} />

                        </div>

                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Esther Akanbi</h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">

                        <li>
                            <Link href="/dashboard" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-blue-700">
                                <BiHomeAlt style={{ fontSize: "20px" }}/>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/create" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-blue-700">
                                <AiOutlinePlusCircle style={{ fontSize: "20px" }}/>
                                <span className="-mr-1 font-medium">Create</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/notification" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-blue-700">
                                <AiOutlineBell style={{ fontSize: "20px" }}/>
                                <span className="-mr-1 font-medium">Notifications</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="settings" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-blue-700">
                                <BiCog style={{ fontSize: "20px" }}/>
                                <span className="-mr-1 font-medium">Settings</span>
                            </Link>
                        </li>
                       
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t ">
                    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:text-white hover:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="text-gray-600 hover:text-white">Logout</span>
                    </button>
                </div>
            </aside>
        
        </>

    )

}