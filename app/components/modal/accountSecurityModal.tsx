import { MdOutlineSecurity } from "react-icons/md"

export default function AccountSecurityModal(){

    return (

        <>
        
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="accountSecurityModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <h3 className="font-bold text-lg">

                        <div className="inline-flex items-center space-x-2">

                            <div>
                                <MdOutlineSecurity style={{ fontSize: "25px" }} />
                            </div>
                            <div>Account Settings</div>

                        </div>

                    </h3>

                   

                    <div className="modal-action">
                        <label htmlFor="accountSecurityModal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        
        </>

    )

}