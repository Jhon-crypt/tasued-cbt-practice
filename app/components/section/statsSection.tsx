import Link from "next/link"
import StudentsTables from "../tables/studentsTable"

export default function StatsSection(props: { heading: any}){

    return (

        <>
        
            <div className="px-6 pt-6 2xl:container">

                <h2 className="mt-10 mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
                    Stats for {props.heading}
                </h2>

                <section className="py-8">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -m-4">

                            <div className="w-full lg:w-1/2 p-4">
                                <div className="p-6 bg-white shadow rounded">
                                    <div className="flex justify-between mb-4">

                                        <div className="stats shadow">

                                            <div className="stat">
                                                <div className="stat-title">Students that passed</div>
                                                <div className="stat-value">60%</div>
                                                
                                            </div>

                                        </div>
                                        {/*  End of stats1 */}

                                        <div className="stats shadow text-error">

                                            <div className="stat">
                                                <div className="stat-title ">Students that failed</div>
                                                <div className="stat-value ">40%</div>
                                                
                                            </div>

                                        </div>
                                        {/*  End of stats1 */}


                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 p-4">
                                <div className="p-6 bg-white shadow rounded">
                                    <div className="flex justify-between mb-4">

                                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                                            <Link href="/practice/inputMatric">
                                                <div className="stat bg-primary text-white">
                                                    <div className="stat-value">Practice<br />Now</div>
                                                </div>
                                            </Link>

                                            <Link href="/createQuestions">
                                                <div className="stat bg-primary text-white">
                                                    <div className="stat-value">Create<br />Question</div>
                                                </div>
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-8">
                    <div className="container px-4 mx-auto">
                        <div className="pt-4 bg-white shadow rounded">
                            <div className="flex px-6 pb-4 border-b">
                                <h3 className="text-xl font-bold">Students Results</h3>
                            </div>

                            <section className="py-8">
                                <div className="container px-4 mx-auto">
                                    <div className="pt-4 bg-white shadow rounded">
                                        <div className="flex px-6 pb-4 border-b">
                                            <h3 className="text-xl font-bold"></h3>
                                        </div>

                                        <StudentsTables />
                                    
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>

            </div>

        </>

    ) 

}