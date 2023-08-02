import Link from 'next/link';
import { BsFillMortarboardFill } from "react-icons/bs";

export default function FourthLevelPracticeSection(){

    return (

        <>
        
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Edu 412</h3>
                                    <p className="text-gray-500">created by @Weird_imaginative_john</p>
                                </div>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className="stat">
                                    <div className="stat-title">Students</div>
                                    <div className="stat-value">460</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <div className="stat bg-primary text-white">
                                    <div className="stat-value">Practice<br />Now</div>
                                </div>

                            </div>
                        </div>
                        <div className="block">
                            <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    )

}