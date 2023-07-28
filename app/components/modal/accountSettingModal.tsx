
import { FaUserCog } from "react-icons/fa"

import EmailUpdateForm from "../forms/emailUpdateForm"

import FullnameUpdateForm from "../forms/fullnameUpdateForm"

export default function AccountSettingsModal(){

    return (

        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="accountSettingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <h3 className="font-bold text-lg">

                        <div className="inline-flex items-center space-x-2">

                            <div>
                                <FaUserCog style={{ fontSize: "25px" }} />
                            </div>
                            <div>Account Settings</div>

                        </div>

                    </h3>

                    <EmailUpdateForm />

                    <FullnameUpdateForm />

                    <div className="modal-action">
                        <label htmlFor="accountSettingModal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        
        </>

    )

}