import Image from "next/image"

export default function HowItwWokrsHero(){

    return (

        <>
        
            <section className="py-32 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:items-center -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <Image className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000" src="https://shuffle.dev/flaro-assets/images/how-it-works/iphone.png" width={488} height={918} alt="How it works image" />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <h2 className="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">Maximize And Unleash Your Exams - Tests Performance.</h2>
                            <div className="flex flex-wrap -m-1.5">
                                <div className="w-full p-1.5">
                                    <div className="flex flex-wrap -m-6">
                                        <div className="w-auto p-6">
                                            <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                                                <Image className="absolute top-0 left-0" src="https://shuffle.dev/flaro-assets/images/how-it-works/gradient.svg" width={40} height={40} alt="How It Works"/>
                                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                            </div>
                                            <Image className="relative left-3" src="https://shuffle.dev/flaro-assets/images/how-it-works/line.svg" width={23} height={130} alt="How It Works"/>
                                        </div>
                                        <div className="flex-1 p-6">
                                            <div className="md:max-w-xs">
                                                <h3 className="mb-3 text-2xl font-semibold leading-snug">Practice Tests</h3>
                                                <p className="text-gray-700 font-medium leading-relaxed">It offers simulations in varieties of Tasued courses in form of tests and exams to help students improve their speed and accuracy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-1.5">
                                    <div className="flex flex-wrap -m-6">
                                        <div className="w-auto p-6">
                                            <div className="relative -left-1 mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                                                <Image className="absolute top-0 left-0" src="https://shuffle.dev/flaro-assets/images/how-it-works/gradient.svg" width={40} height={40} alt="How It Works"/>
                                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                            </div>
                                            <Image className="relative left-3" src="https://shuffle.dev/flaro-assets/images/how-it-works/line2.svg" width={23} height={130} alt="How"/>
                                        </div>
                                        <div className="flex-1 p-6">
                                            <div className="md:max-w-xs">
                                                <h3 className="mb-3 text-2xl font-semibold leading-snug">Track Performance</h3>
                                                <p className="text-gray-700 font-medium leading-relaxed">Responsive feedbacks on students performances in practice tests/exams, This could help students focus their studying efforts where they need it the most</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-1.5">
                                    <div className="flex flex-wrap -m-6">
                                        <div className="w-auto p-6">
                                            <div className="relative left-5 mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                                                <Image className="absolute top-0 left-0" src="https://shuffle.dev/flaro-assets/images/how-it-works/gradient.svg" width={40} height={40} alt="How It Works" />
                                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                                </div>
                                        </div>
                                        <div className="flex-1 p-6">
                                            <div className="md:max-w-xs">
                                                <h3 className="mb-3 text-2xl font-semibold leading-snug">Study Resources</h3>
                                                <p className="text-gray-700 font-medium leading-relaxed">Study resources, such as study guides are also included to help students prepare for exams and tests.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>

    )

}