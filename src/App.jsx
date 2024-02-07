import TitleBar from './components/TitleBar'
import TravelCard from './components/TravelCard'
import './App.css'
import data from './assets/data'

function App() {
  const cards = data.map(item => {
    return (
        <TravelCard
            key={item.id}
            {...item}
            
        />
    )
})        
  return (
    <>
      <div>
        <TitleBar />
        {cards}
      </div>
    </>
  )
}

export default App
