"use client"
import CancelCbtModal from "../modal/cancelCbtModal";
import CountdownTimer from "../utilities/timerUtility";
import handleTimerEnd from "../utilities/handleTimerEnd";

export default function CbtActionHeading(){

    return (

        <>
            
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <CountdownTimer minutes={1} onTimerEnd={handleTimerEnd}/>
                    </a>
                    <div className="flex md:order-2">
                        <label htmlFor="cancelCbtModal" className="text-white bg-error focus:ring-4 focus:outline-none  font-bold rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Cancel
                        </label>
                    </div>
                </div>
            </nav>

            <CancelCbtModal />
        
        </>
        
    )

}