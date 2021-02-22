//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function GalleryItem  ({
  item}) {  
  
  const [count, setCount] = useState(0);


    return (
      <span key={item.id}>
          <span>
            <img src= {item.path} width='100px' height='100px'></img>
            <div>
            <button onClick={() => {setCount(count + 1 ); likeCount(item.id);}}>love it!</button>
            </div>
          </span>
          <div>
            {count} people love this!
          </div>
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