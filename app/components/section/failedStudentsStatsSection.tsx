"use client"
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import calculatePercentage from '../utilities/percentageCalculator'


export default function FailedStudentsStatsSection(props: { id: any, totalNoOfStudents : any}){

    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState(0)

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    useEffect(() => {

        async function fetchPassedStudents() {
            
            try{

                setLoading(true)

                const { count, error }: any = await supabase
                .from('results')
                .select('*', { count: 'exact' })
                .eq('practice_id', `${props.id}`) 
                .eq('status', 'Failed')

                if (error) {

                    setLoading(false)

                    console.log(error)

                } else {

                    setLoading(false)

                    console.log(`This is passed students${count}`)

                    const passPercentage = calculatePercentage(props.totalNoOfStudents, count);

                    console.log(`${passPercentage}%`)

                    setFailed(passPercentage.toFixed(count))

                }

            }catch(error){

                console.log(error)

            }

        }

        fetchPassedStudents()
    
    }, [])

    return (

        <>

            <div className="stats shadow text-error">

                <div className="stat">
                    <div className="stat-title ">Students that failed</div>
                    <div className="stat-value">
                        {loading ?
                            <>
                                <span className="loading loading-dots loading-md"></span>
                            </>
                            :
                            <>
                                {failed}%
                            </>
                        }
                    </div>

                </div>

            </div>
        
        </>

    )

}