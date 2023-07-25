import InfoAlert from "../alerts/infoAlert"

export default function TestForm(){

    return (

        <>
        
            <div className="text-center max-w-md mx-auto">

                <InfoAlert content="The default total questions for test is 20"/>

                <label className="block mb-5 w-full">
                    <input className="w-full px-4 py-3.5 text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput2-1" type="text" placeholder="Course Code" />
                </label>

                <label className="block mb-5 w-full">
                    <select className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline-none rounded-lg" name="field-name">
                        <option>Level</option>
                        <option>100 level</option>
                        <option>200 level</option>
                        <option>300 level</option>
                        <option>400 level</option>
                    </select>
                </label>

                <label className="block mb-5 w-full">
                    <input className="w-full px-4 py-3.5 text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput2-1" type="number" placeholder="Time limit e.g 10 minutes" />
                </label>

                <a href="/cbt">
                    <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Continue</button>
                </a>

            </div>
        
        </>
    
    )

}