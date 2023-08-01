import QuestionSection from "./questionsSection"
import CreateQuestionModal from "../modal/createQuestionModal"

export default function CreateQuestionSection(props: { heading: any, id: any}){

    return (

        <>
        
            <div className="px-6 pt-6 2xl:container">

                <h2 className="mt-10 mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
                    Create Questions for {props.heading}
                </h2>

                <div className="flex justify-center">
                    <label htmlFor="createQuestionModal" className="w-50 mb-8 py-4 px-9 text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200">
                        Create Question
                    </label>
                </div>

                <QuestionSection id={props.id}/>

            </div>

            <CreateQuestionModal id={props.id}/>
        
        </>

    )

}