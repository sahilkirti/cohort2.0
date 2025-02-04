import { RevnueCard } from "./Components/Revnue-card.jsx";   // the current directory where your file is located

function App() {
    return(
        <>
            <div className="grid grid-cols-5">
                  <RevnueCard title={'Amount Pending'} amount={'92,000'} orderCount={'13'}/>
            </div>
        </>
    )
}
export default App