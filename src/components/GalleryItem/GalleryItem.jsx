//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function GalleryItem  ({
  item}) {  
  
  const [count, setCount] = useState(0);
  const [imageFlag, setImageFlag] = useState(true);



    return (
      <span key={item.id}>
          <span  onClick={()=>setImageFlag(!imageFlag)}>
            <div>
             {imageFlag?'111': item.description}
            </div>
            <img src= {item.path} width='100px' height='100px'></img>
            <GetImage flag={imageFlag} />
            { //console.log('image flag is ', {imageFlag});
              // if (imageFlag) {
              //    getImage();
              // }
              // else
              // {
              //    getDescription();
              // }

               
            }
            <div>
            <button onClick={() => {setCount(count + 1 ); likeCount(item.id);}}>love it!</button>
            </div>
          </span>
          <div>
            {count} people love this!
          </div>
          <br></br>
      </span>
    );
}

const likeCount = (id) => {
  axios.put(`/gallery/like/${id}`)
  .then(response => {
    console.log('got a like', response.data);
  })
  .catch(error => {
    console.log('There is a like error', error);
  });
};



function getImage() {
  return <h1>Welcome back!</h1>;
}

function getDescription() {
  return <h1>Please sign up.</h1>;
}

function GetImage(flag) {
  if (flag) {
    return <h2>This is description</h2>;
  }
  else {
    return <h2>This is description 2</h2>;
  }
}

export default GalleryItem;

// let state = {
//   count: 0,
// };

//   return (
//     <span key={item.id}>
//         <span>
//           <img src= {item.path} width='100px' height='100px'></img>
//           <button onClick={() => {setState({count: state.count +1})}}>love it!</button>
//         </span>
//         <div>
//           {state.count} people love this!
//         </div>
//     </span>
//   );
// }