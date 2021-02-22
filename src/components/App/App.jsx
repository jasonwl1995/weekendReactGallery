import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem'

function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [] = useState();
  const [] = useState();

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


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList = {galleryList}
        />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
