import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const MealPage = () => {
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMeals = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      )
      setMeals(response.data.meals) // update the meals state with the fetched meals
      setLoading(false) // set loading state to false after meals are fetched
      // console.log(response.data.meals)
    }
    getMeals() // invoke the function to fetch meals
  }, [searchTerm]) // useEffect runs whenever searchTerm changes

  // Show "Loading..." text while fetching meals
  if (loading) {
    return <div>Loading...</div>
  }

  // Render the search bar and the grid of meal cards
  return (
    <div className="meal-page">
      <div className="search-container">
        <label htmlFor="search-bar" className="search-label">
          Search:
        </label>
        <input
          id="search-bar"
          className="search-bar"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // update searchTerm when user types in the search bar
          placeholder="Enter meal name..."
        />
      </div>
      <div className="featured-items">Featured Meals</div>
      <div className="meal-grid">
        {meals &&
          meals.map((meal) => (
            // Link to each meal's details page with dynamic 'id' path parameter
            <Link
              key={meal.idMeal}
              to={`/meals/${meal.idMeal}`}
              className="meal-card"
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="card-content">
                <h3>{meal.strMeal}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default MealPage
