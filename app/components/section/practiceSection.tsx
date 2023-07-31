import { BsFillMortarboardFill } from "react-icons/bs";
import Link from "next/link";

async function getPractices(id : any){

    const res = await fetch(`http://localhost:3000/api/fetchPractice?adminId=${id}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log('Failed to fetch data')
    }
     
    return res.json()

}

export default async function PracticeSection(props: { admin_id: any}){

    //console.log(props.admin_id)

    const data = await getPractices(props.admin_id)

    const practices = data.practice

    console.log(data)

    return (

        <>

            <div className="px-6 pt-6 2xl:container">

                <h2 className="mt-10 mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
                    Test/Exams Created
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {practices.map((practice: any) => (

                    <div className="md:col-span-2 lg:col-span-1" key={practice.id}>

                        <div className="">
                            <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="mb-5 block">
                                        <div className="flex flex-wrap mb-4 -m-2">
                                            <div className="w-auto p-2">
                                                <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                                            </div>
                                            <div className="w-auto p-2">
                                                <h3 className="font-semibold leading-normal">{practice.course_code}</h3>
                                                <p className="text-gray-500">created by @{practice.admin_name}</p>
                                            </div>
                                        </div>
                                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                                            <div className="stat">
                                                <div className="stat-title">Students</div>
                                                <div className="stat-value">{practice.students_count}</div>
                                                <div className="stat-desc">{practice.date_created}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <Link href="/stats">
                                    <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                                        View stats
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>


                ))}

                </div>
            </div>
        
        </>

    )

}