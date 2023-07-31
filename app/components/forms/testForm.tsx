"use client"
import { useState } from "react"
import InfoAlert from "../alerts/infoAlert"
import ErrorAlert from "../alerts/errorAlert"
import SuccessAlert from "../alerts/successAlert"

export default function TestForm(){

    const [loading, setLoading] = useState(false)

    const [successAlertStatus, setSuccessAlertStatus] = useState(true)

    const [errorAlertStatus, setErrorAlertStatus] = useState(false)

    const [practice_id, setPracticeId] = useState("")

    async function handleCreateTest(event : any){

        setLoading(true)

        event.preventDefault()

        try{

            const test_form_data = {
                courseCode: String(event.target.course_code.value),
                level: String(event.target.level.value),
                timeLimit: String(event.target.time_limit.value)
            }

            //console.log(test_form_data)

            const response = await fetch('/api/createPractice/createTestPractice', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(test_form_data),
            });

            const response_data = await response.json()

            if (response_data.message === true) {

                setLoading(false)

                setSuccessAlertStatus(true)

                setPracticeId(response_data.practiceId)

                console.log(practice_id)

            }else if(response_data.message === false){

                setLoading(false)

                setErrorAlertStatus(true)

            }


        }catch(error){

            console.log(error)

        }


    }

    function closeSuccessAlert(){

        setSuccessAlertStatus(false)
        
    }

    return (

        <>
        
            <div className="text-center max-w-md mx-auto">

                <InfoAlert content="The default total questions for test is 20"/>

                {successAlertStatus?

                    <>
                        <div onClick={closeSuccessAlert}>
                            <SuccessAlert content="You have successfully created a test" />
                            <button className="mb-2 btn btn-outline btn-success">View Test</button>
                        </div>
                    
                    </>

                    :
                    <></>

                }

                {errorAlertStatus ?

                    <>
                        <ErrorAlert content="An error occurred while creating test" />
                    </>
                    :
                    <></>

                }

                <form onSubmit={handleCreateTest}>
                    <label className="block mb-5 w-full">
                        <input id="course_code" className="w-full px-4 py-3.5 text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" type="text" placeholder="Course Code" required/>
                    </label>

                    <label className="block mb-5 w-full">
                        <select id="level" className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline-none rounded-lg" name="field-name">
                            <option>Level</option>
                            <option>100 level</option>
                            <option>200 level</option>
                            <option>300 level</option>
                            <option>400 level</option>
                        </select>
                    </label>

                    <label className="block mb-5 w-full">
                        <input id="time_limit" className="w-full px-4 py-3.5 text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" type="number" placeholder="Time limit e.g 10 minutes" required/>
                    </label>

                    {loading ? 

                        <>

                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 opacity-50 cursor-not-allowed" disabled type="submit">
                                Creating test...
                            </button>
                        
                        </>
                        :
                        <>
                        
                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="submit">
                                Create test
                            </button>
                        
                        </>
                    }

                </form>

            </div>
        
        </>
    
    )

}