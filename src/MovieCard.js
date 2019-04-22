import React from 'react';

const MovieCard = ({ title, year, description, imageURL }) => (
  <div className="col-12 col-sm-6 col-lg-4 py-3 d-flex">
    <div className="card rounded-lg flex-grow w-100">
      { imageURL?
        <img className="card-img-top" src={imageURL[0].url} alt="Movie poster" />
      :
        <img className="card-img-top" src="https://placehold.it/362x200" alt="Movie poster" />
      }
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{year}</small>
        </p>
      </div>
    </div>
  </div>
);

export default MovieCard;
