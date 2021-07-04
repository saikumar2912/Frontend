import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } console.log(myInterval)
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
console.log(myInterval)

          };
    })
    console.log(seconds)
    console.log(minutes)
    return (
        <div>
        <div>
        { minutes === 0 && seconds === 0
            ? <> </>
            : <> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</> 
        }
        </div>
       
        </div>
    );
    
}

export default Timer;