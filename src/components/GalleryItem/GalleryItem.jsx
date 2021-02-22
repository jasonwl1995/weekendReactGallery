//import React, { Component } from 'react';

function GalleryItem  ({
  item}) {  
  
  let state = {
    count: 0,
  };

    return (
      <div>
          <span key={item.id}>
            <img src= {item.path} width='100px' height='100px'></img>
            {/* <button onClick={() => {this.setState({count: this.state.count +1})}}>love it!</button> */}
          </span>
          <div>
            {/* {this.state.count} people love this! */}
          </div>
      </div>
    );
}

export default GalleryItem;