"use client"
import { useState } from 'react';
import TestForm from './testForm';
import ExamForm from './examForm';


export default function CreateForm(){

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    };

    const tabList = [
        { label: 'Test', component: <TestFormComponent /> },
        { label: 'Exam', component: <ExamFormComponent /> },
    ];


    return (

        <>
        
            <div className="px-6 pt-6 2xl:container">

                <h2 className="mt-10 mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
                    Create Test/Exam
                </h2>

                <div className="flex justify-center mt-8">
                    <div className="tabs">
                        {tabList.map((tab, index) => (
                            <a
                                key={index}
                                className={`tab tab-lg tab-lifted ${index === activeTab ? 'tab-active' : ''
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10">

                    {tabList[activeTab].component}

                </div>

            </div>
        
        </>

    )

}

function TestFormComponent(){

    return (

        <>
        
            <TestForm />
        
        </>

    )

}

function ExamFormComponent(){

    return (

        <>
        
            <ExamForm />
        
        </>

    )

}