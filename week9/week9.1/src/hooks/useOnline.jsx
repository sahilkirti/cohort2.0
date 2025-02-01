import { useEffect,useState } from "react";

export function useIsOnline() {
    const[isOnline, setIsOnline] = useState(window.navigator.online);

    useEffect(() => {
        window.addEventListener('online', () => {
            setIsOnline(true);
        })
        window.addEventListener('offline', () => {
            setIsOnline(false);
        })
    },[]);
    return isOnline;
}

export default App;