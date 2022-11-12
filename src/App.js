import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Nav from './components/Nav';
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  useEffect(() => {
    console.log(process.env.REACT_APP_PIXABAY_API_KEY);
    fetch(
      `https://pixabay.com/api/?key=31107371-65cfecb48d4bd5fddeb11264a&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Nav />
      <div className='container '>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className=''>No Images Found</h1>
        )}

        {isLoading ? (
          <h1 className=''>Loading...</h1>
        ) : (
          <div className='row'>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
