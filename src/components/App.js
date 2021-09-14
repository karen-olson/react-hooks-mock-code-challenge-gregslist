import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

/*
Deliverables: 

State: 
1) listings: in App
2) isFavorited: 
3) search

1) When the app starts, I can see all listings
      a) useEffect to make a GET request. Where? In the component that renders
          the listings
2) I can click the star icon to un/favorite a listing (don't need to persist)
      a) Create state to track favorited status
            it is going to change, not passed as a prop, can't calculate it.
      b) Does each listing need its own state variable? 
3) I can click the trash can to remove a listing (does need to persist)
      a) state variable: listings array. Probably in App. 
4) I can search for listings by their name. 
      a) No state needed, just add a filter. 
*/

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((listings) => setListings(listings));
  }, []);

  function onDeleteListing(id) {
    const updatedListings = listings.filter(
      (listing) => listing.id !== parseInt(id)
    );

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => setListings(updatedListings));
  }

  return (
    <div className="app">
      <Header
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ListingsContainer
        listings={listings}
        onDeleteListing={onDeleteListing}
        search={search}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
