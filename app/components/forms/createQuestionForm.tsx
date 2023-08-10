"use client"
import { useState } from "react"
import ErrorAlert from "../alerts/errorAlert"
import SuccessAlert from "../alerts/successAlert"

export default function CreateQuestionForm(props: { practiceId: any}){

    const [loading, setLoading] = useState(false)

    const [successAlertStatus, setSuccessAlertStatus] = useState(false)

    const [errorAlertStatus, setErrorAlertStatus] = useState(false)


    async function handleCreateQuestions(event : any){

        setLoading(true)

        event.preventDefault()

        try{

            const questions_form_data = {
                question : String(event.target.questionTitle.value),
                optionA : String(event.target.optionA.value),
                optionB : String(event.target.optionB.value),
                optionC : String(event.target.optionC.value),
                optionD : String(event.target.optionD.value),
                answer : String(event.target.answer.value),
                practiceId : `${props.practiceId}`
            }

            //console.log(questions_form_data)

            const response = await fetch('/api/createQuestions', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(questions_form_data),
            });

            const response_data = await response.json()

            if(response_data.message === true){

                setLoading(false)

                setSuccessAlertStatus(true)

            }else{

                setLoading(false)

                setErrorAlertStatus(true)

            }

        }catch(error){

            console.log(error)

        }

    }

    return (

        <>
        
            <div className="mt-2 max-w-md mx-auto flex justify-center">

                <form onSubmit={handleCreateQuestions}>
                    <textarea id="questionTitle" className="w-full mb-2 textarea textarea-bordered" placeholder="Question"></textarea>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option A</span>
                        </label>
                        <input id="optionA" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div> 
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option B</span>
                        </label>
                        <input id="optionB" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option C</span>
                        </label>
                        <input id="optionC" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option D</span>
                        </label>
                        <input id="optionD" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <select id="answer" className="mb-4 mt-3 select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Correct Option</option>
                        <option>optionA</option>
                        <option>optionB</option>
                        <option>optionC</option>
                        <option>optionD</option>
                    </select>

                    {successAlertStatus ?

                        <>


                            <SuccessAlert text_size="text-sm" content="You have successfully created a question" />


                        </>

                        :
                        <></>

                    }

                    {errorAlertStatus ?

                        <>
                            <ErrorAlert content="An error occurred while creating question" />
                        </>
                        :
                        <></>

                    }

                    {loading ?

                        <>

                            <button className="mt-4 mb-8 py-4 px-9 text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 btn-wide opacity-50 cursor-not-allowed" disabled type="submit">
                                Creating question...
                            </button>

                        </>
                        :
                        <>

                            <button className="mt-4 mb-8 py-4 px-9 text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 btn-wide" type="submit">
                                Create question
                            </button>

                        </>
                    }

                </form>

            </div>

        </>

    )

}