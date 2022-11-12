import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className=''>
      <form onSubmit={onSubmit} className=''>
        <div className='text-center'>
          <input
            onChange={(e) => setText(e.target.value)}
            className='form-control'
            type='text'
            placeholder='Search Image Term...'
          />
          <button className='btn btn-warning mt-2' type='submit'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
