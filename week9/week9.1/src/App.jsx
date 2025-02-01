import {useEffect} from 'react';

function useMousePointer() {
    const[position, setPosition] = useState();

    const handleMouseMove = (e) => {
        setPosition({x: e.clientX,y:  e.clientY});
    }
    useEffect(() => {
        window.addEventListener('mousemove',handleMouseMove);
        return () => {
            window.removeEventListener('mousemove',handleMouseMove);
        }
    })
}
function App() {
    const mousePointer = useMousePointer();
    return (
        <>
        you mouse pointer is {mousePointer.x} : {mousePointer.y};
        </>
    )
}
export default App;
