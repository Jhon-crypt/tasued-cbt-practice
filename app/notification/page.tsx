import DashboardSidebar from "../components/heading/dashboardSidebar"
import DashboardHeading from "../components/heading/dashboardHeading"
import NotificationSection from "../components/section/notificationSection"

export default function Notification(){

    return (

        <>
        
            <DashboardSidebar />

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <DashboardHeading headingContent="Notifications"/>

                <NotificationSection />

            </div>
        
        </>

    )

}