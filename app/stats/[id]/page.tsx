import DashboardSidebar from "../../components/heading/dashboardSidebar"
import DashboardHeading from "../../components/heading/dashboardHeading"
import StatsSection from "../../components/section/statsSection"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Stats(){

    const { getUser } = getKindeServerSession();

    const user : any = getUser()


    return (

        <>
        
            <DashboardSidebar fname={user.given_name} lname={user.family_name}/>

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <DashboardHeading headingContent="Stats for edu221" />

                <StatsSection />

            </div>
        
        </>

    )

}