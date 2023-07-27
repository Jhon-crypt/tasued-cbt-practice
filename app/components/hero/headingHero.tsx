import Image from "next/image"
import Link from "next/link"
import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/server";

export default function HeadingHero(){

    return (

        <>
        
            <section className="pb-8 mt-2 relative pb-24 md:pt-24 xl:py-0 overflow-hidden" style={{ backgroundColor : "#F8FAFC" }}>
                <Image  className="absolute left-0 bottom-0" src="https://shuffle.dev/flaro-assets/images/applications/gradient3.svg" alt="Hero image" width={912} height={703} />
                    <div className="relative z-10 container px-4 mx-auto">
                        <div className="flex flex-wrap lg:items-center -m-8">
                            <div className="w-full md:w-1/2 p-8">
                                <Image style={{ borderRadius : "93% 7% 73% 27% / 30% 92% 8% 70% " }} className="relative transform hover:scale-105 transition ease-in-out duration-1000" src="/hero1.png" width={831} height={703} alt="Hero image"/>
                            </div>
                            <div className="w-full md:w-1/2 p-8">
                                <div className="md:max-w-2xl">
                                    <h2 className="mb-6 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">Empowering Students Ahead To Succeed </h2>
                                    <p className="mb-11 text-lg text-gray-600 font-medium leading-normal md:max-w-md">Tasued Cbt Parctice was built to help students feel more confident and prepared for exams and tests, ultimately helping to reduce the rate of failure in the institution and reduce the tension and fear associated with cbt exams and tests.</p>
                                    <div className="flex flex-wrap -m-2.5 mb-9">
                                        <div className="w-auto p-2.5">
                                        <Link href="/practice">
                                            <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                                                Practice Test
                                            </button>
                                        </Link>
                                        </div>
                                        <div className="w-auto p-2.5">
                                            <a href="#">
                                            <button className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200" type="button">
                                                <div className="flex flex-wrap justify-center items-center -m-1">
                                                    <div className="w-auto p-1">
                                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="w-auto p-1">
                                                        <RegisterLink>Signup</RegisterLink>
                                                    </div>
                                                </div>
                                            </button>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="pb-10">
                                        <li className="mb-3 inline-flex items-center w-full font-medium leading-relaxed">
                                            <svg className="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#4F46E5"></circle>
                                                <path d="M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Practice Tests</span>
                                        </li>
                                        <li className="mb-3 inline-flex items-center w-full font-medium leading-relaxed">
                                            <svg className="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#4F46E5"></circle>
                                                <path d="M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Performance Tracking.</span>
                                        </li>
                                        <li className="inline-flex items-center w-full font-medium leading-relaxed">
                                            <svg className="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#4F46E5"></circle>
                                                <path d="M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Study Resources</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        
        </>

    )

}