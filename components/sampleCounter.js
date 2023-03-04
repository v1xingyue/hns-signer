import { useState, useEffect } from "react";

const SampleCounter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let localCount = localStorage.getItem("count");
        if (localCount != null) {
            setCount(parseInt(localStorage.getItem("count")));
        } else {
            setCount(0);
        }
    }, [])

    useEffect(() => {
        if (count) {
            localStorage.setItem("count", count);
        }
    }, [count]);

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
            <div className="card-body">
                <h2 className="card-title">Move Page counter!</h2>
                <p>Current count : {count}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={() => {
                        setCount(count + 1)
                    }} >+</button>
                    <button className="btn btn-info" onClick={() => {
                        setCount(count - 1)
                    }} >-</button>
                </div>
            </div>
        </div>
    );
}

export default SampleCounter;