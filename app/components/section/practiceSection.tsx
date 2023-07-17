import Image from "next/image"

export default function PraticeSection(){

    return (

        <>
        
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <Image width={46} height={46} src="https://shuffle.dev/flaro-assets/images/testimonials/avatar.png" alt=""/>
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                    <p className="text-gray-500 uppercase">@brooklysim</p>
                                </div>
                            </div>
                            <p className="text-lg font-medium">If you haven’t tried out Flaro App yet, I would definitely recommend it for both designers and developers 🤙🏻</p>
                        </div>
                        <div className="block">
                            <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <Image width={46} height={46} src="https://shuffle.dev/flaro-assets/images/testimonials/avatar.png" alt=""/>
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                    <p className="text-gray-500 uppercase">@brooklysim</p>
                                </div>
                            </div>
                            <p className="text-lg font-medium">If you haven’t tried out Flaro App yet, I would definitely recommend it for both designers and developers 🤙🏻</p>
                        </div>
                        <div className="block">
                            <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <Image width={46} height={46} src="https://shuffle.dev/flaro-assets/images/testimonials/avatar.png" alt=""/>
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                    <p className="text-gray-500 uppercase">@brooklysim</p>
                                </div>
                            </div>
                            <p className="text-lg font-medium">If you haven’t tried out Flaro App yet, I would definitely recommend it for both designers and developers 🤙🏻</p>
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