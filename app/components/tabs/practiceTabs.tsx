"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { BsFillMortarboardFill } from "react-icons/bs";

export default function PracticeTabs(){

    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index : any) => {
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
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <BsFillMortarboardFill style={{ fontSize : "46px" }}/>
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Edu 111</h3>
                                    <p className="text-gray-500">created by @Deeper_grace</p>
                                </div>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className="stat">
                                    <div className="stat-title">Students</div>
                                    <div className="stat-value">450</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <Link href="/practice/inputMatric">
                                    <div className="stat bg-primary text-white">
                                        <div className="stat-value">Practice<br />Now</div>
                                    </div>
                                </Link>

                            </div>
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
                                    <BsFillMortarboardFill style={{ fontSize : "46px" }}/>
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Edu 112</h3>
                                    <p className="text-gray-500">created by @Deeper_grace</p>
                                </div>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className="stat">
                                    <div className="stat-title">Students</div>
                                    <div className="stat-value">600</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <Link href="/practice/inputMatric">
                                    <div className="stat bg-primary text-white">
                                        <div className="stat-value">Practice<br />Now</div>
                                    </div>
                                </Link>

                            </div>
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
  
  function CohumComponent() {
    return (

        <>
        
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Edu 211</h3>
                                    <p className="text-gray-500">created by @Cute_smart_esther</p>
                                </div>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className="stat">
                                    <div className="stat-title">Students</div>
                                    <div className="stat-value">100</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <div className="stat bg-primary text-white">
                                    <div className="stat-value">Practice<br />Now</div>
                                </div>

                            </div>
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
                                    <BsFillMortarboardFill style={{ fontSize : "46px" }}/>
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Gns 214</h3>
                                    <p className="text-gray-500">created by @Oversabi_honourable</p>
                                </div>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className="stat">
                                    <div className="stat-title">Students</div>
                                    <div className="stat-value">260</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <div className="stat bg-primary text-white">
                                    <div className="stat-value">Practice<br/>Now</div>
                                </div>

                            </div>
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
  
  function CospedComponent() {
    return (

        <>
        
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <BsFillMortarboardFill style={{ fontSize : "46px" }}/>
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Edu 311</h3>
                                    <p className="text-gray-500">created by @Porche_korean_joel</p>
                                </div>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className="stat">
                                    <div className="stat-title">Students</div>
                                    <div className="stat-value">300</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <div className="stat bg-primary text-white">
                                    <div className="stat-value">Practice<br/>Now</div>
                                </div>

                            </div>
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
  
  function CosmasComponent() {
    return (

        <>
        
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                            <div className="flex flex-wrap mb-4 -m-2">
                                <div className="w-auto p-2">
                                    <BsFillMortarboardFill style={{ fontSize: "46px" }} />
                                </div>
                                <div className="w-auto p-2">
                                    <h3 className="font-semibold leading-normal">Edu 412</h3>
                                    <p className="text-gray-500">created by @Weird_imaginative_john</p>
                                </div>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className="stat">
                                    <div className="stat-title">Students</div>
                                    <div className="stat-value">460</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <div className="stat bg-primary text-white">
                                    <div className="stat-value">Practice<br />Now</div>
                                </div>

                            </div>
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
  