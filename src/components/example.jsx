import React, { useEffect, useState } from "react";

function Example() {
    const [dataFromServer, setDataFromServer] = useState(underfined)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://anime.com", { method: "GET" });
            const data = response.json();
            setDataFromServer(data);
        };
        getData();
    }, []);

    return <>{dataFromServer.title}</>

}

export default Example;