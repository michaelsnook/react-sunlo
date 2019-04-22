import React from 'react';

const PostTease = ({ title, content, image, created_at }) => (
  <div className="row border-bottom p-3">
    <div className="col-12 col-sm-6 col-md-4 mb-3 mb-sm-0">
      { image?
        <img className="img-fluid" src={image[0].url} alt="Movie poster" />
      :
        <img className="img-fluid" src="https://placehold.it/362x200" alt="Movie poster" />
      }
    </div>
    <div className="col">
      <h4 className="">{title}</h4>
      <p className="card-text">{content}</p>
    </div>
  </div>
);

export default PostTease;
