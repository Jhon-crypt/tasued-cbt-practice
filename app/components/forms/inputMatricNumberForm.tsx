"use client"
import Link from "next/link"
import { useState } from "react"
import ErrorAlert from "../alerts/errorAlert"
import SuccessAlert from "../alerts/successAlert"

export default function InputMatricNumberForm(props: { practice_id: any}){

    const [loading, setLoading] = useState(false)

    const [successAlertStatus, setSuccessAlertStatus] = useState(false)

    const [errorAlertStatus, setErrorAlertStatus] = useState(false)

    async function handleInputMatricNumber(event : any){

       setLoading(true) 

       event.preventDefault()

        try {

            const input_matric_form_data = {
                matric : String(event.target.matricNumber.value),
                practiceId : `${props.practice_id}`
            }

            //console.log(input_matric_form_data)

            const response = await fetch('/api/inputStudentMatric', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input_matric_form_data),
            });

            const response_data = await response.json()

            if(response_data.message === true){

                console.log("Inserted")

            }else{

                console.log("Could not insert")

            }

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <>
        
            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h4 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">Practice Edu111</h4>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal">Input Your Matric Number To Continue.</p>
                        <form onSubmit={handleInputMatricNumber}>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="matricNumber" type="number" placeholder="Matric Number"/>
                            </label>
                           
                            
                                <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="submit">Continue</button>
                          
                        </form>
                    </div>
                </div>
            </section>
        
        </>

    )

}