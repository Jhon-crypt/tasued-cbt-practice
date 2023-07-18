"use client"
import React, { useState } from 'react';

interface Question {
  questionNumber: number;
  questionText: string;
  options: string[];
}

const questions: Question[] = [
    {
        questionNumber: 1,
        questionText: "Who's the president of Nigeria?",
        options: ["Option A", "Option B", "Option C", "Option D"],
    },
    // Add more questions as needed
];

const Card: React.FC<Question> = ({ questionNumber, questionText, options }) => {
    return (
        <div className="flex justify-center mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="text-sm text-slate-400">Question {questionNumber}</p>
                    <h2 className="card-title">{questionText}</h2>
                    {options.map((option, index) => (
                        <div key={index} className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">{`Option ${String.fromCharCode(65 + index)} : ${option}`}</span>
                                <input type="radio" name={`radio-${questionNumber}`} className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                    ))}
                    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary" onClick={() => handleNextClick(questionNumber)}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default function CbtQuestions(){

    return (

        <>

            <div className="flex justify-center mt-10">
                

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="text-sm text-slate-400">Question 1</p>
                        <h2 className="card-title">Who's the president of Nigeria</h2>

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

                        <div className="card-actions justify-end mt-5">
                            <button className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>

            </div>
        
        </>

    )

}