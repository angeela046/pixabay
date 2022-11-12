import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className='col-md-4 mt-3'>
      <div className='card'>
        <img src={image.webformatURL} alt='' className='img-thumbnail' />
        <div className='card-body'>
          <div className=''>Photo by {image.user}</div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className='card-footer'>
          {tags.map((tag, index) => (
            <span key={index} className='badge bg-secondary m-1'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
