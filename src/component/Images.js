import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./images.css"
import { useState } from 'react';

const Images=(props)=>{
    const[numOfLikes,setNumOfLikes]=useState(0)

    const likeHandler=()=>{
        setNumOfLikes(numOfLikes+1)
        props.likes()
    }
    return(
        
                     
<Card style={{ width: '18rem' }}>
   
      <Card.Img variant="top" src={props.image_url} onClick={likeHandler} className="size"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        Likes: {numOfLikes}
        </Card.Text>
        <Button variant="primary" onClick={likeHandler}>👍</Button>
      </Card.Body>
   
    </Card>
   

    )
}

export default Images;