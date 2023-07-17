"use client"

import React, { useState, useEffect } from "react";

interface StopwatchState {
    isRunning: boolean;
    elapsedTime: number;
}

export default function CbtHeading(){

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

      const handleStart = () => {
        if (!state.isRunning) {
          setState({ isRunning: true, elapsedTime: state.elapsedTime });
        }
      };
    
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
        
            <h2 className="mb-16 text-4xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-tight">
                Edu 222
            </h2>

            <div className="flex justify-center">
                <div className="stats shadow">

                    <div className="stat place-items-center">
                        <div className="stat-title">Time left</div>
                        <div className="stat-value">{formatElapsedTime(state.elapsedTime)}</div>
                        <div className="stat-desc"></div>
                    </div>

                    <div className="stat place-items-center bg-primary text-white">
                        <div className="stat-title"></div>
                        <div className="stat-value">Submit</div>
                        <div className="stat-desc text-secondary"></div>
                    </div>

                    <div className="stat place-items-center bg-error text-white">
                        <div className="stat-title"></div>
                        <div className="stat-value">Cancel</div>
                        <div className="stat-desc"></div>
                    </div>

                </div>
            </div>

            <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
        
        </>

    )

}