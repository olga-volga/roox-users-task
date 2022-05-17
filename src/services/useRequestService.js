import { useState } from 'react';

const useRequestService = () => {
    const [process, setProcess] = useState('loading');

    const _api = 'https://jsonplaceholder.typicode.com/users';
    
    const getResource = async (url) => {
        try {
            const result = await fetch(url);
            if (!result.ok) {
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);
            }
            return result.json();
        } catch(e) {
            setProcess('error');
            throw e;
        }
    };
    const getUsers = async () => {
        const result = await getResource(_api);
        return result;
    };
    const getUser = async (id) => {
        const result = await getResource(_api);
        return result[id];
    };

    return {process, setProcess, getUsers, getUser};
}

export default useRequestService;