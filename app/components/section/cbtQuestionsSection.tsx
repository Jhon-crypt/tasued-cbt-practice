"use client"
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

//9157ada7-fb98-4356-ae11-12df3e6ba6ab/0131ac71-967d-408c-b9d3-f75a9c1faf74/20190110249
export default function CbtQuestions(props: { practice_id: any, student_id: any, matric_num: any }){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const [loading, setLoading] = useState(false)

    const [cbt_questions, setCbtQuestions]: any = useState([])

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

                    console.log(cbt_questions)

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

    return (

        <>

            <div className="flex justify-center mt-10 mb-10">

                <div className="grid grid-flow-row auto-rows-max">

                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl m-5">
                            <div className="card-body">
                                <p className="text-sm text-slate-400">Question 1 {props.matric_num}</p>
                                <h2 className="card-title">Do You Think School Is Scam</h2>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">A. Yes</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">B. No</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">C. Maybe</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">D. I dont know</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl m-5">
                            <div className="card-body">
                                <p className="text-sm text-slate-400">Question 1</p>
                                <h2 className="card-title">Who's the president of Nigeria</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">A : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">B : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">C : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">D : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        
        </>

    )

}