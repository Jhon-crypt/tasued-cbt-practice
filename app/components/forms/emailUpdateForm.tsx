export default function EmailUpdateForm(){

    return (

        <>
        
            <div className="mt-4 form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email | test@gmail.com</span>
                    <span className="label-text-alt">Edit email</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="mt-3 mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                    Update email
                </button>
            </div>
        
        </>

    )

}