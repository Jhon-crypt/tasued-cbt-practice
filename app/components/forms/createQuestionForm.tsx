"use client"

export default function CreateQuestionForm(props: { practiceId: any}){

    //console.log(props.practiceId)

    return (

        <>
        
            <div className="mt-2">

                <form>
                    <textarea id="questionTitle" className="w-full mb-2 textarea textarea-bordered" placeholder="Question"></textarea>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option A</span>
                        </label>
                        <input id="optionA" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option B</span>
                        </label>
                        <input id="optionB" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option C</span>
                        </label>
                        <input id="optionC" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Option D</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <select className="mt-3 select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Correct Option</option>
                        <option>Option A</option>
                        <option>Option B</option>
                        <option>Option C</option>
                        <option>Option D</option>
                    </select>

                    <button className="mt-4 mb-8 py-4 px-9 text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 btn-wide" type="submit">
                        Create question
                    </button>

                </form>

            </div>

        </>

    )

}