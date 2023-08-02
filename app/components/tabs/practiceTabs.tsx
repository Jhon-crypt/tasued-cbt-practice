"use client"
import React, { useState } from 'react';
import FirstLevelPracticeSection from '../section/100levelPractice';
import SecondLevelPracticeSection from '../section/200levelPractice';
import ThirdLevelPracticeSection from '../section/300levelPractice';

export default function PracticeTabs(){

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    };

    const tabList = [
        { label: '100 lvl', component: <CositComponent /> },
        { label: '200 lvl', component: <CohumComponent /> },
        { label: '300 lvl', component: <CospedComponent /> },
        { label: '400 lvl', component: <CosmasComponent /> },
    ];

    return (

        <>
        
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

            <div className="flex flex-wrap m-3 mt-3">

                {tabList[activeTab].component}

            </div>
        
        </>

    )

}

function CositComponent() {
    return (
        <>
            <FirstLevelPracticeSection />

        </>
    )
  }
  
  function CohumComponent() {
    return (

        <>
        
            <SecondLevelPracticeSection />
        
        </>

    )
  }
  
  function CospedComponent() {
    return (

        <>
        
            <ThirdLevelPracticeSection />
        
        </>

    )
  }
  
  function CosmasComponent() {
    return (

        <>
        
            
        
        </>

    )
  }
  