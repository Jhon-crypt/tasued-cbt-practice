import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";

export default function AdminAuthModal(){

    return (

        <>
        
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="adminLoginModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <div className="flex flex-col items-center justify-center">
                        <h3 className="font-bold text-lg mt-10">Admin Authentication</h3>
                        <div className="flex mt-5">
                            
                            <LoginLink>
                                <button className="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4">

                                    Login

                                </button>
                            </LoginLink>
                            
                            <RegisterLink>
                                <button className="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4">
                                    Signup
                                </button>
                            </RegisterLink>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="adminLoginModal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        
        
        </>

    )

}