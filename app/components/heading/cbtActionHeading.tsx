"use client"
import CancelCbtModal from "../modal/cancelCbtModal";
import CountdownTimer from "../utilities/timerUtility";
import handleTimerEnd from "../utilities/handleTimerEnd";
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function CbtActionHeading(props: { id: any}){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const [loading, setLoading] = useState(false)

    const [timeLimit, setTimeLimit] = useState("")

    useEffect(() => {
     
        async function fetchTimeLimit(){

            try {

                setLoading(true)

                let { data: time, error }: any = await supabase
                    .from("practice")
                    .select("*")
                    .eq("practice_id", `${props.id}`)
                    .single()

                if(time){

                    setLoading(false)

                    setTimeLimit(time.time_limit);

                    console.log(timeLimit)

                }else{

                    setLoading(false)

                    console.log(error)

                }

            }catch(error){

                console.log(error)

            }

        }

        fetchTimeLimit()

    }, [])
    

    return (

        <>
            
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center">
                        {loading?
                        
                            <>
                                <span className="loading loading-dots loading-md"></span>
                            </>
                            :
                            <>
                                <CountdownTimer minutes={timeLimit} onTimerEnd={handleTimerEnd}/>
                            </>
                            
                        }
                        
                    </a>
                    <div className="flex md:order-2">
                        <label htmlFor="cancelCbtModal" className="text-white bg-error focus:ring-4 focus:outline-none  font-bold rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Cancel
                        </label>
                    </div>
                </div>
            </nav>

            <CancelCbtModal />
        
        </>
        
    )

}