import Link from "next/link"

export default function InputMatricNumberForm(){

    return (

        <>
        
            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h4 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">Practice Edu111</h4>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal">Input Your Matric Number To Continue.</p>
                        <form>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput2-1" type="number" placeholder="Matric Number"/>
                            </label>
                           
                            <Link href="/cbt">
                                <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Continue</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
        
        </>

    )

}