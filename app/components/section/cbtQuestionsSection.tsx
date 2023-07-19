"use client"

export default function CbtQuestions(){



    return (

        <>

            <div className="flex justify-center mt-10 mb-10">

                <div className="grid grid-flow-row auto-rows-max">

                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl m-5">
                            <div className="card-body">
                                <p className="text-sm text-slate-400">Question 1</p>
                                <h2 className="card-title">Do You Think School Is Scam</h2>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">A. Yes</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">B. No</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">C. Maybe</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">D. I dont know</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl m-5">
                            <div className="card-body">
                                <p className="text-sm text-slate-400">Question 1</p>
                                <h2 className="card-title">Who's the president of Nigeria</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">A : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">B : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">C : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">D : Option</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        
        </>

    )

}