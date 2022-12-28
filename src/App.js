import { useState } from "react";
import Images from "./component/Images";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import "./component/images.css"
const App=props=>{
const imagesArray=[{
  "_id": 1,
  "image_url": "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg",
  "title": "nature1",
  "likes": 2
},

{
  "_id": 2,
  "image_url": "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
  "title": "nature2",
  "likes": 0
},

{
  "_id": 3,
  "image_url": "https://wallpapercave.com/wp/u9AVLry.jpg",
  "title": "nature3",
  "likes": 0
}]

const[ImageState,SetImageState]=useState(imagesArray)
const[totalLikes,setLikes]=useState(0)

const toatlLikeHandler=()=>{
  setLikes(totalLikes+1)
}
return(
  <div>
    <h1 className="totalLikes">😍 Total Likes 😍{totalLikes}</h1>
    <CardGroup>
   
{ImageState.map((image,index)=>(
   <div className="item">
 <Images
  key={image._id}
  title={image.title}
  image_url={image.image_url} 
 

  likes={toatlLikeHandler}
    />
    </div>
))}

</CardGroup>

  </div>
)
}

export default App;
