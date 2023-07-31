import DashboardSidebar from "../components/heading/dashboardSidebar"
import DashboardHeading from "../components/heading/dashboardHeading"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import PracticeSection from "../components/section/practiceSection";
import { Suspense } from "react";

export default function Dashboard() {

    const { getUser } = getKindeServerSession();

    const user : any = getUser()

    //encoding the admin id
    const encoded_user_id = Buffer.from(user.id).toString('base64');

    return (

        <>

            <DashboardSidebar fname={user.given_name} lname={user.family_name}/>
           
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <DashboardHeading headingContent="Dashboard" />

                <PracticeSection admin_id={encoded_user_id} />
                
            </div>

        </>

    )

}