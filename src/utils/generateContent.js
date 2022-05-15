import Spinner from "../components/spinner/Spinner";

const generateContent = (process, Component, props) => {
    switch(process) {
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component {...props} />;
        case 'error':
            return <div style={{textAlign: 'center', marginTop: '20px'}}>Error. Try again later.</div>;
        default:
            throw new Error('Unexpected process');
    }
}

export default generateContent;