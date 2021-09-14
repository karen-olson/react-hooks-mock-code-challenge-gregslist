import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorited, setFavorited] = useState(false);

  function handleFavoriteClick() {
    setFavorited(!isFavorited);
  }

  function handleDelete(e) {
    onDeleteListing(e.target.id);
    console.log("deleting");
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          id={listing.id}
          onClick={handleDelete}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
