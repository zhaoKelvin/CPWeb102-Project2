import './App.css'
import Flashcard from "./compononents/Flashcard.jsx";

function App() {

  return (
    <div className="App">
      <div>
        <h1>React Flashcards</h1>
        <h3>This is a web app where you can quiz yourself on the basics of React.
          You can click through the cards to flip and see their description!</h3>

        <Flashcard />
      </div>
    </div>
  )
}

export default App
