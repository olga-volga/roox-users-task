const requestService = () => {
    const getResource = async (url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }
        return result.json();
    };
    const getUsers = async () => {
        const result = await getResource('https://jsonplaceholder.typicode.com/users');
        return result;
    };

    return {getUsers};
}

export default requestService;