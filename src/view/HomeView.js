import React, {useEffect, useState }from 'react'





export const HomeView = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert("Home component is being rendered")
        return () => {
            alert("component is being removed")
        }
    }, [])

    return(
    <div>
        <h1>this is my home view</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count +1)}>Increment with one</button>
    </div>
    )
}
