import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ProductImg from '../../assets/images/mens/one.jpg';

const LatestProducts = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Card>
                        <Card.Img variant="top" className='w-100' src={ProductImg} />
                        <Card.Body>
                        <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                        <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                        <Button variant="primary" className='w-100'>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <Card.Img variant="top" className='w-100' src={ProductImg} />
                        <Card.Body>
                        <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                        <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                        <Button variant="primary" className='w-100'>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <Card.Img variant="top" className='w-100' src={ProductImg} />
                        <Card.Body>
                        <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                        <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                        <Button variant="primary" className='w-100'>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <Card.Img variant="top" className='w-100' src={ProductImg} />
                        <Card.Body>
                        <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                        <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                        <Button variant="primary" className='w-100'>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestProducts
