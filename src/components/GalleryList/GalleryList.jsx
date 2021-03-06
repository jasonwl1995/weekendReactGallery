import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, likeCount}) {
  return (


    <div>

    {galleryList.map((gallery) => {
      return(
        <GalleryItem key={gallery.id} item={gallery} likeCount={likeCount} 
        />
      );
      })}
    </div>
  );
}

export default GalleryList;

{/* <span key={gallery.id}>
<img src= {gallery.path}></img>
<button onClick={() => {this.setState({count: this.state.count +1})}}>love it!</button>
<div>
  {this.state.count} people love this!
</div>
</span> */}