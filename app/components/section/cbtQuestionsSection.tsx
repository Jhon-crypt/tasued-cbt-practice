"use client"
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import LoaderSection from './loaderSection'

//9157ada7-fb98-4356-ae11-12df3e6ba6ab/0131ac71-967d-408c-b9d3-f75a9c1faf74/20190110249
export default function CbtQuestions(props: { practice_id: any, student_id: any, matric_num: any }){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const [loading, setLoading] = useState(false)

    const [cbt_questions, setCbtQuestions]: any = useState([])

    const [loading2, setLoading2] = useState(false)

    const [selectedAnswer, setSelectedAnswer] = useState({});

    const [hiddenAnswer, setHiddenAnswerValue] = useState('');

    useEffect(() => {

        async function getCbtQuestions(){

            try{

                setLoading(true)

                let { data: questions, error }: any = await supabase
                    .from("questions")
                    .select("*")
                    .eq("practice_id", "6f9c5a0f-ca00-4fd5-ac08-db94f1976935")


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


    
    function handleSelectQuestions(questionId: any, optionId: any) {
        {

            setLoading2(true)

            setSelectedAnswer((prevAnswers) => ({
                ...prevAnswers,
                [questionId]: optionId,
            }))

        }

    }

    function handleHiddenInputField(e: any){
        setHiddenAnswerValue(e.target.value);
    };
    
    const submitQuestions = async (event: any) => {

        event.preventDefault()

        console.log(selectedAnswer)

        console.log(hiddenAnswer)

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

                                <form>

                                    {cbt_questions.map((questions: any) => (

                                        <div className="card w-96 bg-base-100 shadow-xl m-5" key={questions.id}>
                                            <div className="card-body">
                                                <p className="text-sm text-slate-400">Question 1</p>
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
                                                        onChange={(e) => handleSelectQuestions(questions.id, e.target.value)}
                                                    >
                                                        <option>Answer</option>
                                                        <option value="optionA">Option A</option>
                                                        <option value="optionB">Option B</option>
                                                        <option value="optionC">Option C</option>
                                                        <option value="optionD">Option D</option>
                                                    </select>
                                                </label>

                                                <input onChange={handleHiddenInputField} type="hidden" value={questions.answer} />

                                            </div>
                                        </div>


                                    ))}

                                    <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="submit">
                                        Submit
                                    </button>

                                </form>

                            </div>



                        </>}



                </div>

            </>

        )

}