//grid take whole width and flex take only that much space which is needed ;
function App() {
    return(
        <>
            <div className='grid grid-cols-5'>
                <div className='bg-red-500'>hi </div>
                <div className='bg-yellow-500'>there </div>
                <div className='bg-blue-500'>Singh</div>
                <div className='bg-red-500'>hi </div>
                <div className='bg-yellow-500'>there </div>
            </div>
            <div className="grid grid-cols-10">
                <div className="bg-red-500 col-span-4">superman</div>
                <div className="bg-yellow-500 col-span-4">is</div>
                <div className="bg-green-500 col-span-2">coming</div>
            </div>
        </>
    )
}
export default App;


