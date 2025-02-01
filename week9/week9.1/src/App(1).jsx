import { useEffect,useState } from "react";

function App() {
  const [render,setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    },10000);
  },[]);
  return(
    <>
      {render? <MyComponent/> : <div></div>}
    </>
  )
}
function MyComponent() {
  //these are called the lifecycle even when component or when component does not mount;
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("unmounted component");
    }
  },[]);
  return (
    <div>
      From inside component;
    </div>
  )
}
export default App;