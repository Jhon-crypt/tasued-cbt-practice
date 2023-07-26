import SettingsList from "../lists/settingsList"

export default function SetttingsSection(){

    return (

        <>
        
            <div className="px-6 pt-6 2xl:container">

                <h2 className="mt-10 mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
                    Settings
                </h2>

                <SettingsList />

            </div>
        
        </>

    )

}