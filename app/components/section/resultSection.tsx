"use client"
import Link from "next/link"
import { BiMessageAltCheck } from "react-icons/bi"
import { HiOutlineExclamationTriangle } from "react-icons/hi2"
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import LoaderSection from "./loaderSection"

export default function ResultSection(props: { studentId: any}){

    const [loading, setLoading] = useState(false)

    const [score, setStudentScore] = useState("")

    const [status, setStatus] = useState("")

    const [failedScore, setFailedScore] = useState("")

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);


    useEffect(() => {

        async function getResults(){

            try {

                setLoading(true)

                let { data: student_result, error }: any = await supabase
                    .from("results")
                    .select("*")
                    .eq("student_id", `${props.studentId}`)
                    .single()

                if(student_result){

                    setLoading(false)

                    console.log(student_result)

                    setStudentScore(student_result.score)

                    setStatus(student_result.status)

                    setFailedScore(student_result.failed_questions)

                }else if(error){

                    setLoading(false)

                    console.log("Failed to load student result")

                }

            }catch(error){

                console.log(error)

            }

        }

        getResults()

    }, [])

    return (

        <>
        
            <div className="flex justify-center">

                {loading?

                    <>
                        <LoaderSection />
                    </>
                    :
                    <>
                    
                        <div className="stats shadow">

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <BiMessageAltCheck style={{ fontSize: "30px" }} />
                                </div>
                                <div className="stat-title">Your Score</div>
                                <div className="stat-value text-primary">{score}</div>
                                <div className="stat-desc">You {status}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <HiOutlineExclamationTriangle style={{ fontSize: "30px" }} />
                                </div>
                                <div className="stat-title">Questions you failed</div>
                                <div className="stat-value text-secondary">{failedScore} Questions</div>
                                <div className="stat-desc"></div>
                            </div>

                        </div>
                    
                    </>

                }

                

            </div>
        
        </>

    )

}