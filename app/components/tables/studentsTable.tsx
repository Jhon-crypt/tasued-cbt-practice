"use client"
import { useState, useEffect } from 'react'
import LoaderSection from '../section/loaderSection'

export default  function StudentsTables(props: { id: any}){

    const [student_results, setStudentResults] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function getStudentResults(){

            try{

                setLoading(true)

                const res = await fetch(`http://localhost:3000/api/fetchResults?practiceId=${props.id}`)


                const results_data = await res.json()

                if(results_data){

                    setLoading(false)

                    setStudentResults(results_data.results)

                    console.log(results_data)

                }else{

                    setLoading(false)

                }

    
            }catch(error){
    
    
    
            }

        }

        getStudentResults()
     
    }, [])
    

    return (

        <>
        

            <div className="p-4 overflow-x-auto">

                {loading?
                
                    <>
                        <LoaderSection />
                    </>
                    :
                    <>
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="text-xs text-gray-500 text-left">
                                    <th className="pb-3 font-medium">Matric Number</th>
                                    <th className="pb-3 font-medium">Score</th>
                                    <th className="pb-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student_results.map((result: any) => (
                                    <tr className="text-xs bg-gray-50">
                                        <td className="py-5 px-6 font-medium">{result.matric_number}</td>
                                        <td className="font-medium">{result.score}</td>
                                        <td>
                                            <span className="inline-block py-1 px-2 text-dark bg-grey rounded-full">{result.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                }

            </div>

        
        </>

    )

}