"use client"
import Link from 'next/link';
import { BsFillMortarboardFill } from "react-icons/bs";
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import LoaderSection from './loaderSection'

export default function FourthLevelPracticeSection(){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const [loading, setLoading] = useState(false)

    const [fourth_level_practices, setFourth_level_practices]: any = useState([])

    useEffect(() => {

        async function getFourthLevelParctices(){

            try {

                setLoading(true)

                let { data: fourth_pract, error }: any = await supabase
                    .from("practice")
                    .select("*")
                    .eq("level", "400-level")

                if (fourth_pract) {

                    setLoading(false)

                    setFourth_level_practices(fourth_pract)

                } else {

                    setLoading(false)

                    console.log(error)

                }

            }catch(error){
    
                console.log(error)
    
            }

        }

        getFourthLevelParctices()

    }, [])

    return (

        <>
        
        {loading ?

<>

    <div className="flex justify-center">
        <LoaderSection />
    </div>

</>

:

<>

    {fourth_level_practices.map((fourth_level: any) => (

        <div className="w-full md:w-1/2 lg:w-1/3 p-3" key={fourth_level.id}>
            <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                <div className="flex flex-col justify-between h-full">
                    <div className="mb-5 block">
                        <div className="flex flex-wrap mb-4 -m-2">
                            <div className="w-auto p-2">
                                <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                            </div>
                            <div className="w-auto p-2">
                                <h3 className="font-semibold leading-normal">{fourth_level.course_code}</h3>
                                <p className="text-gray-500">created by @{fourth_level.admin_name}</p>
                            </div>
                        </div>
                        <div className="stats stats-vertical lg:stats-horizontal shadow">
                            <Link href={encodeURI(`/practice/inputMatric/${fourth_level.practice_id}/${fourth_level.course_code}`)}>
                                <div className="stat bg-primary text-white">
                                    <div className="stat-value">Practice<br />Now</div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    ))}

</>

}
        
        </>

    )

}