export default function CreateQuestionForm(){

    return (

        <>
        
            <div className="mt-2">

                <textarea className="w-full mb-2 textarea textarea-bordered" placeholder="Question"></textarea>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Option A</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Option B</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Option C</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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

            </div>

        </>

    )

}