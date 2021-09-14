import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({ search, setSearch, sortBy, setSortBy }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} />
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
    </header>
  );
}

export default Header;
