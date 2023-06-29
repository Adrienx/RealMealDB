import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/meals">Meals</NavLink>
        </li>
        <li>
          <NavLink to="/drinks">Drinks</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
