import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState(""); // State for active filter

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
    setActiveFilter(category); // Set active filter
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
    setActiveFilter(`price-${price}`); // Set active filter based on price
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          {/* Tabs Section */}
          <div className="nav-tabs">
            <Link to={"/"} className="tab">
              Home
            </Link>
            <Link to={"/shop"} className="tab">
              Shop
            </Link>
            <Link to={"/about"} className="tab">
              About Us
            </Link>
            <Link to={"/contact"} className="tab">
              Contact
            </Link>
          </div>

          {/* Cart */}
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname === "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div
              onClick={() => {
                setData(items);
                setActiveFilter("no-filter");
              }}
              className={`items ${activeFilter === "no-filter" ? "active-filter" : ""}`}
            >
              No Filter
            </div>
            <div
              onClick={() => filterByCategory("mobiles")}
              className={`items ${activeFilter === "mobiles" ? "active-filter" : ""}`}
            >
              Mobiles
            </div>
            <div
              onClick={() => filterByCategory("laptops")}
              className={`items ${activeFilter === "laptops" ? "active-filter" : ""}`}
            >
              Laptops
            </div>
            <div
              onClick={() => filterByCategory("tablets")}
              className={`items ${activeFilter === "tablets" ? "active-filter" : ""}`}
            >
              Tablets
            </div>
            <div
              onClick={() => filterByPrice(29999)}
              className={`items ${activeFilter === "price-29999" ? "active-filter" : ""}`}
            >
              {">="}29999
            </div>
            <div
              onClick={() => filterByPrice(49999)}
              className={`items ${activeFilter === "price-49999" ? "active-filter" : ""}`}
            >
              {">="}49999
            </div>
            <div
              onClick={() => filterByPrice(69999)}
              className={`items ${activeFilter === "price-69999" ? "active-filter" : ""}`}
            >
              {">="}69999
            </div>
            <div
              onClick={() => filterByPrice(89999)}
              className={`items ${activeFilter === "price-89999" ? "active-filter" : ""}`}
            >
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
