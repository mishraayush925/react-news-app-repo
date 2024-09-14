import React from "react";
import { Link } from 'react-router-dom';

export function NewsItemsCard({ cardProp ,newsItem}) {
  return (
    <>
      <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={newsItem._imgUrl} alt={cardProp.altText} />
            <div className="card-body">
              <h5 className="card-title">{newsItem._title}</h5>
              <p className="card-text">{newsItem._content}</p>
              
              <a href="newsdetails.js"  className="btn btn-primary">
                {cardProp.readMore}
              </a>
             
            </div>
          </div>
        </div>
      <br />
      <br />
    </>
  );
}

// export default Card;
