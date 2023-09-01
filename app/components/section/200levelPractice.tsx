"use client"
import Link from 'next/link';
import { BsFillMortarboardFill } from "react-icons/bs";
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import LoaderSection from './loaderSection'

export default function SecondLevelPracticeSection(){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const [loading, setLoading] = useState(false)

    const [second_level_practices, setSecond_level_practices]: any = useState([])

    useEffect(() => {

        async function getSecondLevelParctices(){

            try {

                setLoading(true)

                let { data: second_pract, error }: any = await supabase
                    .from("practice")
                    .select("*")
                    .eq("level", "200-level")

                if (second_pract) {

                    setLoading(false)

                    setSecond_level_practices(second_pract)

                } else {

                    setLoading(false)

                    console.log(error)

                }

            }catch(error){
    
                console.log(error)
    
            }

        }

        getSecondLevelParctices()

    }, [])

    return (

        <>

        {loading?
        
            <>
            
                    <div className="flex justify-center">
                        <LoaderSection />
                    </div>
            
            </>

            :

            <>
            
                    {second_level_practices.map((second_level: any) => (

                        <div className="w-full md:w-1/2 lg:w-1/3 p-3" key={second_level.id}>
                            <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="mb-5 block">
                                        <div className="flex flex-wrap mb-4 -m-2">
                                            <div className="w-auto p-2">
                                                <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                                            </div>
                                            <div className="w-auto p-2">
                                                <h3 className="font-semibold leading-normal">{second_level.course_code}</h3>
                                                <p className="text-gray-500">created by @{second_level.admin_name}</p>
                                            </div>
                                        </div>
                                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                                            <Link href={encodeURI(`/practice/inputMatric/${second_level.practice_id}/${second_level.course_code}`)}>
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