import CreateQuestionForm from "../forms/createQuestionForm"

export default function CreateQuestionModal(){

    return (

        <>
        
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="createQuestionModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Create Question</h3>
                    
                    <CreateQuestionForm />
                    
                    <div className="modal-action">
                        <label htmlFor="createQuestionModal" className="btn">Close!</label>
                    </div>
                </div>
            </div>

        </>

    )

}