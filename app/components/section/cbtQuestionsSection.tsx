"use client"
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import LoaderSection from './loaderSection'
import SuccessAlert from '../alerts/successAlert'
import ErrorAlert from '../alerts/errorAlert'

//9157ada7-fb98-4356-ae11-12df3e6ba6ab/0131ac71-967d-408c-b9d3-f75a9c1faf74/20190110249
export default function CbtQuestions(props: { student_id: any, practice_id : any, matric_number : any }){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const [loading, setLoading] = useState(false)

    const [cbt_questions, setCbtQuestions]: any = useState([])

    const [selectedAnswer, setSelectedAnswer] : any = useState({});

    const [submit_loader, setSubmitLoader] = useState(false)

    const [submit_status, setSubmitStatus] = useState(false);

    const [error_status, setErrorStatus] = useState(false);

    useEffect(() => {

        async function getCbtQuestions(){

            try{

                setLoading(true)

                let { data: questions, error }: any = await supabase
                    .from("questions")
                    .select("*")
                    .eq("practice_id", `${props.practice_id}`)


                if (questions) {

                    setLoading(false)

                    setCbtQuestions(questions)

                    //console.log(cbt_questions)

                }else{

                    setLoading(false)

                    console.log(error)

                    console.log("Could not run qestions query")

                }

            }catch(error){

                console.log(error)

            }

        }

        getCbtQuestions()

    }, [])


    
    function handleSelectQuestions(event : any, questionId : any) {
        
        const selected_option = event.target.value;

        setSelectedAnswer((prevAnswer: any) => ({
            ...prevAnswer,
            [questionId]: selected_option,
        }))

    }
    
    const submitQuestions = async (event: any) => {

        setSubmitLoader(true)

        event.preventDefault()

        try{

            let userScore = 0
            let failed_Score = 0

            cbt_questions.forEach((question: any) => {
                if (selectedAnswer[question.id] === question.answer) {
                    userScore++
                }else{
                    failed_Score++
                }
            })

            if(userScore >= cbt_questions.length * 0.5){

                const { data, error } = await supabase
                    .from('results')
                    .update({
                        score: `${userScore}`,
                        status: "Passed",
                        failed_questions: `${failed_Score}`
                    })
                    .eq('student_id', `${props.student_id}`)
                    .select()


                if (error) {

                    setSubmitStatus(false)

                    setSubmitLoader(false)

                    setErrorStatus(true)

                    console.log("Could Not Update")

                    console.log(error)

                } else {

                    setSubmitStatus(true)

                    setSubmitLoader(false)

                    console.log("Updated")

                    window.location.href= `https://tasued-cbt-practice.vercel.app/${props.student_id}`
                    
                }

            }else{

                const { data, error } = await supabase
                    .from('results')
                    .update({
                        score: `${userScore}`,
                        status: "Failed",
                        failed_questions: `${failed_Score}`
                    })
                    .eq('student_id', `${props.student_id}`)
                    .select()


                if (error) {

                    setSubmitLoader(false)

                    setSubmitStatus(false)

                    setErrorStatus(true)

                    console.log("Could Not Update")

                    console.log(error)

                } else {

                    setSubmitStatus(true)

                    setSubmitLoader(false)

                    console.log("Updated")

                    window.location.href= `https://tasued-cbt-practice.vercel.app/result/${props.student_id}`

                }

            }

        }catch(error){

            console.log(error)

        }
        

    }



        return (

            <>

                <div className="flex justify-center mt-10 mb-10">

                    {loading ?

                        <>

                            <LoaderSection />

                        </>

                        :

                        <>

                            <div className="grid grid-flow-row auto-rows-max">

                                {/*
                                <p>You passed {score} questions, and you failed {failedScore} questions {status}</p>
                                */}
                                <form onSubmit={submitQuestions}>

                                    {cbt_questions.map((questions: any) => (

                                        <div className="card w-96 bg-base-100 shadow-xl m-5" key={questions.id}>
                                            <div className="card-body">

                                                <h2 className="card-title">{questions.question_name}</h2>

                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span className="label-text">A. {questions.option_a}</span>

                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span className="label-text">B. {questions.option_b}</span>

                                                    </label>
                                                </div>

                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span className="label-text">C. {questions.option_c}</span>

                                                    </label>
                                                </div>

                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span className="label-text">D. {questions.option_d}</span>
                                                    </label>
                                                </div>

                                                <label className="block mb-5 w-full">
                                                    <select
                                                        id={`question-${questions.id}`}
                                                        className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline-none rounded-lg"
                                                        name={`question-${questions.id}`}
                                                        onChange={(event) => handleSelectQuestions(event, questions.id)}
                                                    >
                                                        <option>Answer</option>
                                                        <option>optionA</option>
                                                        <option>optionB</option>
                                                        <option>optionC</option>
                                                        <option>optionD</option>
                                                    </select>
                                                </label>

                                            </div>
                                        </div>


                                    ))}

                                    {submit_status?
                                        <>
                                            <SuccessAlert text_size="text-lg" content="Submitted, wait..." />
                                        </>
                                        :
                                        <></>
                                    }

                                    {error_status?
                                        <>
                                            <ErrorAlert content="an error occurred, try again" />
                                        </>
                                        :
                                        <></>
                                    }


                                    {submit_loader?
                                        <>
                                        
                                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 opacity-50 cursor-not-allowed" disabled type="submit">
                                                Submitting questions...
                                            </button>
                                        
                                        </>
                                        :
                                        <>
                                        
                                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="submit">
                                                Submit
                                            </button>
                                        
                                        </>
                                    }

                                    
                                </form>

                            </div>



                        </>}



                </div>

            </>

        )

}