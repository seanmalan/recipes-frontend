import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* <div>
      <a href="/">Home</a>
    </div>
    <div>
      <a href="/kitchens">Kitchens</a>
    </div>
    <div>
      <a href="/recipes">Recipes</a>
    </div> */}

      <div className="navbar-links">
        <a href="/">Home</a>
        <div className="dropdown">
          <a href="#" className="dropbtn">
            Categories
          </a>
          <div className="dropdown-content">
            <a href="/meal-type/breakfast">Breakfast</a>
            <a href="{% url 'meal-type' query='lunch' %}">Lunch</a>
            <a href="{% url 'meal-type' query='dinner' %}">Dinner</a>
            <a href="{% url 'meal-type' query='dessert' %}">Dessert</a>
            <a href="{% url 'meal-type' query='drink' %}">Drinks</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropbtn">
            Health & Diet
          </a>
          <div className="dropdown-content">
            <a href="{% url 'meal-type' query='vegan' %}">Vegan</a>
            <a href="{% url 'meal-type' query='keto' %}">Keto</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropbtn">
            Holidays
          </a>
          <div className="dropdown-content">
            <a href="{% url 'meal-type' query='christmas' %}">Christmas</a>
            <a href="{% url 'meal-type' query='easter' %}">Easter</a>
            <a href="{% url 'meal-type' query='mothers day' %}">Mother's Day</a>
            <a href="{% url 'meal-type' query='thanksgiving' %}">
              Thanksgiving
            </a>
          </div>
        </div>
      </div>

      <div className="logIn-container">
        <div className="user-profile-link navbar-links">
          <a href="{% url 'user-profile' user.id %}">User Profile</a>
        </div>

        <div className="signed-in">
          {/* <p>Hello {user.username}</p> */}
          <a href="{% url 'logout' %}">Log out</a>
        </div>

        <div className="logIn-link">
          <a href="{% url 'login' %}">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
