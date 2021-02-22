import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem'

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios.get('/gallery')
      .then(response => {
        console.log('got a response!', response.data);
        setGalleryList(response.data);
      })
      .catch(err => {
        console.log('There seems to be an error', err);
      });
  };

  const likeCount = (id) => {
    axios.put(`/gallery/like/${id}`)
    .then(response => {
      console.log('got a like', response.data);
      fetchItems();
    })
    .catch(error => {
      console.log('There is a like error', error);
    });
  };

  // const likeCount = (id) => {
  //   axios.put(`/gallery/like/${id}`)
  //   .then(response => {
  //     log('got a like', response.data);
  //   })
  //   .catch(error => {
  //     console.log('There is a like error', error);
  //   });
  // };


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList = {galleryList}
        likeCount = {likeCount}
        />
      </div>
    );
}

export default App;
