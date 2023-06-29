import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const DrinkPage = () => {
  const [drinks, setDrinks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDrinks = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      )
      setDrinks(response.data.drinks) // update the drinks state with the fetched drinks
      console.log(response.data.drinks)
      setLoading(false) // set loading state to false after drinks are fetched
      console.log(response.data)
    }
    getDrinks() // invoke the function to fetch drinks
  }, [searchTerm]) // useEffect runs whenever searchTerm changes

  // Show "Loading..." text while fetching drinks
  if (loading) {
    return <div>Loading...</div>
  }

  // Render the search bar and the grid of drink cards
  return (
    <div className="drink-page">
      <div className="search-container">
        <label htmlFor="search-bar" className="search-label">
          Search
        </label>
        <input
          id="search-bar"
          className="search-bar"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // update searchTerm when user types in the search bar
          placeholder="Enter drink name from the selection below..."
        />
      </div>
      <div className="drink-grid">
        {drinks &&
          drinks.map((drink) => (
            // Link to each drink's details page with dynamic 'id' path parameter
            <Link
              key={drink.idDrink}
              to={`/drinks/${drink.idDrink}`}
              className="drink-card"
            >
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <div className="card-content">
                <h3>{drink.strDrink}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default DrinkPage
