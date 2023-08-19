import Link from "next/link"

export default function CancelCbtModal(){

    return (

        <>
        
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="cancelCbtModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <div className="flex flex-col items-center justify-center">
                        <h3 className="font-bold text-lg mt-10">Are You Sure You Want To Cancel?</h3>
                        <div className="flex mt-5">
                            
                            <button className="font-bold text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4">
                                <Link href="/practice">
                                    Yes Cancel
                                </Link>
                            </button>
                            
                            <label htmlFor="cancelCbtModal" className="font-bold text-white bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">
                                No Continue
                            </label>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="cancelCbtModal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        
        </>
//font-bold text-white bg-blue-700 hover:bg-blue-800
//bg-red-500 hover:bg-red-600
    )

}