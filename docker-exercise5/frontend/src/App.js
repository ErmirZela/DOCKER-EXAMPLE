import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
