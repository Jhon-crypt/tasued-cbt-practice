import Image from "next/image"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function LogoutHero(){

    return (

        <>
        
            <section className="pt-32 pb-36 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="flex flex-col justify-between h-full">
                                <div className="mb-8">
                                    <h2 className="mb-6 text-8xl text-indigo-600 font-bold tracking-px-2n leading-none">Oops</h2>
                                    <h3 className="mb-4 text-3xl font-bold font-heading leading-snug">Something is wrong!</h3>
                                    <p className="text-lg text-gray-600 font-medium leading-normal md:max-w-md">The page you are looking for requires you to login! Try something else or login now.</p>
                                </div>
                                <div>
                                    <a className="inline-flex items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal" href="#">
                                        <svg className="mr-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <LoginLink>Login Now</LoginLink>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8 self-end">
                            <Image className="mx-auto transform hover:-translate-x-4 transition ease-in-out duration-1000" src="https://shuffle.dev/flaro-assets/images/http-codes/illustration.png" width={608} height={410} alt="Logout image" />
                        </div>
                    </div>
                </div>
            </section>
        
        </>

    )

}