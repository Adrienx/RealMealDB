import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const DrinkDetails = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState()

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setDrink(response.data.drinks[0])
      })
  }, [id])

  return drink ? (
    <div className="drink-detail">
      <div className="drink-card-detail">
        <img
          className="card-image"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <div className="card-content">
          <h2>{drink.strDrink}</h2>
          {
            // Split the drink instructions by periods to get each sentence
            drink.strInstructions.split(".").map((instruction, index) => {
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
              <Link to="/drinks">Back to All Drinks</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default DrinkDetails
