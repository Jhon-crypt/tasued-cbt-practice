import { FaUserCog } from "react-icons/fa"
import { MdOutlineSecurity } from "react-icons/md"
import AccountSettingsModal from "../modal/accountSettingModal"
import AccountSecurityModal from "../modal/accountSecurityModal"

export default function SettingsList(){

    return (

        <>
        
            <label htmlFor="accountSettingModal" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div className="inline-flex items-center space-x-2">

                    <div>
                        <FaUserCog style={{ fontSize: "25px" }} />
                    </div>
                    <div>Account Settings</div>

                </div>
            </label>

            <label htmlFor="accountSecurityModal" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div className="inline-flex items-center space-x-2">
                    <div>
                        <MdOutlineSecurity style={{ fontSize: "25px"}} />
                    </div>
                    <div>Account Security</div>
                </div>
            </label>

            <AccountSettingsModal />

            <AccountSecurityModal />
        
        </>

    )

}

//let number = 10/100 * 300