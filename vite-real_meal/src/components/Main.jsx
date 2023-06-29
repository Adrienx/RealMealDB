import { Route, Routes } from "react-router-dom"
import MealPage from "./MealPage"
import DrinkPage from "./DrinkPage"
import DrinkDetails from "./DrinkDetails"
import MealDetails from "./MealDetails"
import PropTypes from "prop-types"

const Main = ({ meals }) => {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<DrinkPage />} />
        <Route path="/meals" element={<MealPage meals={meals} />} />
        <Route path="/meals/:id" element={<MealDetails />} />
        <Route path="/drinks" element={<DrinkPage meals={meals} />} />
        <Route path="/drinks/:id" element={<DrinkDetails />} />
      </Routes>
    </div>
  )
}

Main.propTypes = {
  meals: PropTypes.array.isRequired,
}

export default Main
