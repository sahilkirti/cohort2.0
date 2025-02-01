import {useIsOnline} from './hooks/useOnline'
function App() {
    const isOnline = useIsOnline();
    if(isOnline)
        return 'You are online'
    return 'you are offline'
    
}
export default App;
