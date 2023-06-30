import { Route, Routes } from "react-router-dom"
import MealPage from "./MealPage"
import DrinkPage from "./DrinkPage"
import DrinkDetails from "./DrinkDetails"
import MealDetails from "./MealDetails"

const Main = () => {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<DrinkPage />} />
        <Route path="/meals" element={<MealPage />} />
        <Route path="/meals/:id" element={<MealDetails />} />
        <Route path="/drinks" element={<DrinkPage />} />
        <Route path="/drinks/:id" element={<DrinkDetails />} />
      </Routes>
    </div>
  )
}

export default Main
