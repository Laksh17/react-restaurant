import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [waiting, setWaiting] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConst = new AbortController();

        fetch(url, { signal: abortConst.signal })
            .then(resp => {
                if (!resp.ok) {
                    throw Error('Could not find the data for this resource');
                }
                return resp.json();
            })
            .then(data => {
                setData(data);
                setWaiting(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch was aborted');
                }
                else {
                    setWaiting(false);
                    setError(err.message);
                }
            });

        return () => abortConst.abort();

    }, [url]);

    return { data, waiting, error };
}


export default useFetch;