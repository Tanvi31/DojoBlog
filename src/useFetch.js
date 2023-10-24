import { useState, useEffect } from "react";

// this fires on every render
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // add empty dependency array so that hook runs the function only at the first initial render
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could Not Fetch Data from Resource");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            });
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
