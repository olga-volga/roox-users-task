const requestService = () => {
    const api = 'https://jsonplaceholder.typicode.com/users';
    
    const getResource = async (url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }
        return result.json();
    };
    const getUsers = async () => {
        const result = await getResource(api);
        return result;
    };
    const getUser = async (id) => {
        const result = await getResource(api);
        return result[id];
    };

    return {getUsers, getUser};
}

export default requestService;