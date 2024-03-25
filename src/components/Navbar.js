
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <Link to="#" className="dropbtn">
            Categories
          </Link>
          <div className="dropdown-content">
            <Link to={`/meal-types/breakfast`}>Breakfast</Link>
            <Link to={`/meal-types/lunch`}>Lunch</Link>
            <Link to={`/meal-types/dinner`}>Dinner</Link>
            <Link to={`/meal-types/dessert`}>Dessert</Link>
            <Link to={`/meal-types/drinks`}>Drinks</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropbtn">
            Health & Diet
          </Link>
          <div className="dropdown-content">
            <Link to={``}>Vegan</Link>
            <Link to={``}>Keto</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropbtn">
            Holidays
          </Link>
          <div className="dropdown-content">
            <Link to={`/meal-types/christmas`}>Christmas</Link>
            <Link to={`/meal-types/easter`}>Easter</Link>
            <Link to={`/meal-types/mothers day`}>Mother`s Day</Link>
            <Link to={`/meal-types/thanksgiving`}>
              Thanksgiving
            </Link>
          </div>
        </div>
      </div>

      <div className="logIn-container">
        <div className="user-profile-link navbar-links">
          <Link to="{% url 'user-profile' user.id %}">User Profile</Link>
        </div>

        <div className="signed-in">
          {/* <p>Hello {user.username}</p> */}
          <Link to="{% url 'logout' %}">Log out</Link>
        </div>

        <div className="logIn-link">
          <Link to="{% url 'login' %}">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
