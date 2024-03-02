import React, { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState(new Date);
    useEffect(() => {
        const intervalId = setInterval(() => { setDate(new Date) }, 1000);
        setTimeout(() => { clearInterval(intervalId) }, 1000);
    });

    const actualDate = date.toLocaleString(undefined, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })

    return (
        <div className="clock">
            Aktualna data: {" "}
            {actualDate}
        </div>
    )
};


export default Clock;