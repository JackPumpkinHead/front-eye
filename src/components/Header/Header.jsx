import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";


export const Header = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(response => setData(response.value))
    }, [])

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {
                    !data ? "Loading.." : data
                }
            </p>
        </>
    )
}