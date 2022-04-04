import React from 'react'
import {Card,Button }  from 'react-bootstrap'
import Moviecard from './MovieCard.css'
function MovieCard({movie:{title, rate , image, desc, year, id}}) {
  return (

    <div className="movie">    
        <div className="star">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div> 
          <Card className="cart">
          <Card.Body>
          <Button variant="Add">Add</Button>
          <Button variant="Edit">Edit</Button>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='text'>
          {rate}
          </Card.Text>
          <Card.Text>
            {desc}
          </Card.Text>
          <Card.Text>
            {year} <br/> {id}
          </Card.Text>
          <Card.Img style={{width:"18rem"}} src={image} />
          </Card.Body>
           </Card>
    </div>



  )
}

export default MovieCard