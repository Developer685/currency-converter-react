import React, { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState(new Date);
    useEffect(() => {
        setInterval(() => { setDate(new Date) }, 1000);
    });
    return (
        <div className="clock">
            Aktualna data: {" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                day: "2-digit",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </div>
    )
};


export default Clock;