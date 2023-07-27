import DashboardSidebar from "../components/heading/dashboardSidebar"
import DashboardHeading from "../components/heading/dashboardHeading"
import CreateQuestionSection from "../components/section/creeateQuestionsSection"

export default function CreateQuestion(){

    return (

        <>
        
            <DashboardSidebar />

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <DashboardHeading headingContent="Create Question For Edu something" />

                <CreateQuestionSection />

            </div>
        
        </>

    )

}