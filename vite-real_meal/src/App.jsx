import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import "./App.css"

// The main App component sets up the base for the application. It manages a state variable 'searchTerm' to store the user's search input
const App = () => {
  const [searchTerm, setSearchTerm] = useState("") // state variable to keep track of search term

  // This function updates the searchTerm state variable whenever the user types in the search bar.
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    // App renders Header (which receives handleSearch as a prop) and Main (which receives searchTerm as a prop)
    <div className="app">
      <Header handleSearch={handleSearch} />
      <Main searchTerm={searchTerm} />
    </div>
  )
}

export default App
