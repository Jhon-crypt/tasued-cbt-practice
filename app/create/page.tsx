import DashboardSidebar from "../components/heading/dashboardSidebar"
import DashboardHeading from "../components/heading/dashboardHeading"
import CreateForm from "../components/forms/createForm"

export default function Create(){

    return (


        <>
        
            <DashboardSidebar />

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <DashboardHeading headingContent="Create"/>

                <CreateForm />

            </div>

        </>

    )

}