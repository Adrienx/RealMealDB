import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const MealDetails = () => {
  const { id } = useParams()
  const [meal, setMeal] = useState()

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setMeal(response.data.meals[0])
      })
  }, [id])

  return meal ? (
    <div className="meal-detail">
      <div className="meal-card-detail">
        <img
          className="card-image"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="card-content">
          <h2>{meal.strMeal}</h2>
          {
            // Split the drink instructions by periods to get each sentence
            meal.strInstructions.split(".").map((instruction, index) => {
              // Remove any leading or trailing whitespace from the instruction
              const trimmedInstruction = instruction.trim()

              // If there's any text left after trimming, check if the instruction is only a number
              if (trimmedInstruction) {
                const isNumber = !isNaN(trimmedInstruction)

                // If the instruction is a number, just render it as-is without a bullet point or period
                if (isNumber) {
                  return <p key={index}>{trimmedInstruction}</p>
                } else {
                  // If the instruction isn't just a number, add a bullet point at the start and a period at the end
                  return <p key={index}>&bull; {trimmedInstruction}.</p>
                }
              }
              // If there's no text left after trimming (i.e., the instruction was just whitespace),
              // don't render anything for this instruction
              return null
            })
          }
          <div className="back-button">
            <button>
              <Link to="/meals">Back to All Meals</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default MealDetails
