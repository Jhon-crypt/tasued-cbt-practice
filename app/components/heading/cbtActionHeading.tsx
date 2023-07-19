"use client"
import { useState, useEffect } from "react";
import SubmitModal from "../modal/submitModal";

interface StopwatchState {
    isRunning: boolean;
    elapsedTime: number;
}

export default function CbtActionHeading(){

    const [state, setState] = useState<StopwatchState>({
        isRunning: false,
        elapsedTime: 0,
      });

      useEffect(() => {

        let intervalId: any;
    
        if (state.isRunning) {
          intervalId = setInterval(() => {
            setState((prevState) => ({
              ...prevState,
              elapsedTime: prevState.elapsedTime + 1,
            }));
          }, 10);
        }
    
        return () => clearInterval(intervalId);
      }, [state.isRunning]);

      useEffect(() => {

        function startTime(){

          if (!state.isRunning) {
            setState({ isRunning: true, elapsedTime: state.elapsedTime });
          }

        }

        startTime()

      }, []);

      const handleStop = () => {
        if (state.isRunning) {
          setState({ isRunning: false, elapsedTime: state.elapsedTime });
        }
      };
    
      const handleReset = () => {
        setState({ isRunning: false, elapsedTime: 0 });
      };

      const formatElapsedTime = (elapsedTime: number) => {
        const minutes = Math.floor(elapsedTime / (60 * 100));
        const seconds = Math.floor((elapsedTime / 100) % 60);
        const milliseconds = elapsedTime % 100;
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
      };

    return (

        <>
        
            
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            {formatElapsedTime(state.elapsedTime)}
                        </span>
                    </a>
                    <div className="flex md:order-2">
                        <label htmlFor="my_modal_6" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </label>
                    </div>
                </div>
            </nav>

            <SubmitModal />
        
        </>
        
    )

}