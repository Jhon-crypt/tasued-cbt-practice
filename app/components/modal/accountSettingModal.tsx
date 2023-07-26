
import { FaUserCog } from "react-icons/fa"

export default function AccountSettingsModal(){

    return (

        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="accountSettingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <h3 className="font-bold text-lg">

                        <div className="inline-flex items-center space-x-2">

                            <div>
                                <FaUserCog style={{ fontSize: "25px" }} />
                            </div>
                            <div>Account Settings</div>

                        </div>

                    </h3>

                    <div id="accordion-collapse" data-accordion="collapse">

                <h2 id="accordion-collapse-heading-2">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                        <span>Is there a Figma file available?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>

            </div>

                    <div className="modal-action">
                        <label htmlFor="accountSettingModal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        
        </>

    )

}