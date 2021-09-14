import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing, search, sortBy }) {
  // Look for another design pattern for this feature

  let listingsToDisplay;

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  function sortListings(a, b) {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  }

  const sortedListings = filteredListings.sort(sortListings);

  sortBy !== "none"
    ? (listingsToDisplay = sortedListings)
    : (listingsToDisplay = filteredListings);

  const listingCards = listingsToDisplay.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
      onDeleteListing={onDeleteListing}
    />
  ));

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
