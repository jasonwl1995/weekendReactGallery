//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GalleryItem  ({
  item, likeCount}) {  
  
  const [count, setCount] = useState(0);
  // const [imageFlag, setImageFlag] = useState(true);

  // const imgPath = "<img src= {item.path} width='100px' height='100px'></img>";
    
  const [toggle, setToggleFlag] = useState(true);

  const onRenderImg = (evt) => {
    //do not forget this
    evt.preventDefault();
    console.log('inside on onRenderImg, toggle', toggle);
    setToggleFlag(!toggle);
  };


  const ToggleImage =() => {
    if (toggle) {
      return <img src={item.path} width='100px' height='100px' alt="test img"></img>;
    }
    else {
      return <span> {item.description}</span>;
    }
  
  };

    return (
      <span key={item.id}>
          <span  onClick={onRenderImg}>
          <ToggleImage />
            {/* <div>
             {
               imageFlag?'': item.description}

            </div> */}
            {/* <GetImage flag={imageFlag} /> */}
            {/* <img src= {item.path} width='100px' height='100px'></img> */}
            { /* <GetImage flag={imageFlag} />  */ }
            { //console.log('image flag is ', {imageFlag});
              // if (imageFlag) {
              //    getImage();
              // }
              // else
              // {
              //    getDescription();
              // }

               
            }

          </span>
          <div>
            <button onClick={() => {likeCount(item.id)}}>love it!</button>
          </div>
          <div>
            {count} people love this!
          </div>
          <br></br>
      </span>
    );
}
// setCount(count +1); 

  // const likeCount = (id) => {
  //   axios.put(`/gallery/like/${id}`)
  //   .then(response => {
  //     console.log('got a like', response.data);
  //     fetchItems();
  //   })
  //   .catch(error => {
  //     console.log('There is a like error', error);
  //   });
  // };

  //   axios.get('/gallery')
  //   .then(response => {
  //     console.log('get a like count', response.data);
  //     fetchItems()
  //   })



// function getImage() {
//   return <h1>Welcome back!</h1>;
// }

// function getDescription() {
//   return <h1>Please sign up.</h1>;
// }

// function GetImage(flag) {
//   let ret;
//   console.log("flag inside function is ", flag);
//   if (flag) {
//     ret = <h2>This is description</h2>;
//   }
//   else {
//     ret = <h2>This is description 2</h2>;
//   }

//   console.log('ret=', ret);
//   return (
//   <span> {ret}
//   </span>)
// }

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