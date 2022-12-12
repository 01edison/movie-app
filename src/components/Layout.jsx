import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Layout = ({ setTrigger, trigger }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      setTrigger(!trigger);
      navigate(`/search/${searchValue}`);
    }
  };
  return (
    <div>
      <header className="header">
        <div className="title-container">
          <p>MyTestApp</p>
        </div>
      </header>
      <div>
        <div className="theatre-section">
          <span>Watch something incredible</span>
        </div>
      </div>
      <div className="main-body">
        <div>
          <form onSubmit={submit} className="search-section">
            <label>Search</label>
            <input
              type="text"
              className="search-box"
              value={searchValue}
              onChange={handleChange}
            />
          </form>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
