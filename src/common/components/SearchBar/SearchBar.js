import React from "react";

export const SearchBar = () => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <div className="col-6 col-md-8 col-lg-10 px-0">
        <input
          className="form-control mr-sm-2 rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </form>
  );
};
