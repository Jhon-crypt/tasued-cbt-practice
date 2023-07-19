import { BsFillMortarboardFill } from "react-icons/bs";


export default function AdminCbtQuestionSection(){

    return (

        <>

        <div className="px-6 pt-6 2xl:container">

            <h2 className="mt-10 mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
                Test/Exams Created
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    <div className="md:col-span-2 lg:col-span-1">

                        <div className="">
                            <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="mb-5 block">
                                        <div className="flex flex-wrap mb-4 -m-2">
                                            <div className="w-auto p-2">
                                                <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                                            </div>
                                            <div className="w-auto p-2">
                                                <h3 className="font-semibold leading-normal">Edu 211</h3>
                                                <p className="text-gray-500">created by @Cute_smart_esther</p>
                                            </div>
                                        </div>
                                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                                            <div className="stat">
                                                <div className="stat-title">Students</div>
                                                <div className="stat-value">100</div>
                                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                                            </div>

                                            <div className="stat bg-primary text-white">
                                                <div className="stat-value">Practice<br />Now</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1">

                        <div className="">
                            <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="mb-5 block">
                                        <div className="flex flex-wrap mb-4 -m-2">
                                            <div className="w-auto p-2">
                                                <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                                            </div>
                                            <div className="w-auto p-2">
                                                <h3 className="font-semibold leading-normal">Edu 211</h3>
                                                <p className="text-gray-500">created by @Cute_smart_esther</p>
                                            </div>
                                        </div>
                                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                                            <div className="stat">
                                                <div className="stat-title">Students</div>
                                                <div className="stat-value">100</div>
                                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                                            </div>

                                            <div className="stat bg-primary text-white">
                                                <div className="stat-value">Practice<br />Now</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

            </div>
        </div>
        
        </>

    )

}