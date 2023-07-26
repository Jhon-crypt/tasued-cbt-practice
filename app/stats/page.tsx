import DashboardSidebar from "../components/heading/dashboardSidebar"
import DashboardHeading from "../components/heading/dashboardHeading"
import StatsSection from "../components/section/statsSection"

export default function Stats(){

    return (

        <>
        
            <DashboardSidebar />

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <DashboardHeading headingContent="Stats for edu221" />

                <StatsSection />

            </div>
        
        </>

    )

}