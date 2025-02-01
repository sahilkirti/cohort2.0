import { useState,useEffect } from "react"
import axios from 'axios'
function useTodos(n) {
    const[todos,setTodos]=useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(() => {
        setInterval(() => {
            axios.get('https://sum-server.100xdevs.com/todos')
             .then(res => {
                setTodos(res.data.todos)
                setLoading(false)
            })
        }, n * 1000); 
        
        axios.get('https://sum-server.100xdevs.com/todos')
         .then(res => {
            setTodos(res.data.todos)
            setLoading(false)
         })
    },[])
    return {todos,loading};
}
function App() {
    const {todos,loading} = useTodos(5);
    return (
        <>
            {loading? 'loading...' : todos.map(todo => <Track todo={todo}/>)}
        </>
    )
}
function Track({todo}) {
    return <div>
        {todo.title}
        <br/>
        {todo.description}
    </div>
}
export default App;
