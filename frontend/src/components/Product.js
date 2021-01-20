import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { p } = props;
  return (
    <div key={p._id} className="card">
      <Link to={`/product/${p._id}`}>
        <img className="medium" src={p.image} alt={p.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${p._id}`}>
          <h2>{p.name}</h2>
        </Link>
        <Rating rating={p.rating} numReviews={p.numReviews} />
        <div className="price">$ {p.price}</div>
      </div>
    </div>
  );
}
