import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import ProductImg from '../../assets/images/mens/eleven.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const FeaturedProducts = () => {
  return (
    <>
    <div className="container pt-5">
      <div className="row">
        <div className="col-12">
          <h2>Featured Products</h2>
          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
            //   pagination={{ clickable: true }}
              loop={true}
              spaceBetween={20}
              slidesPerView={4}
                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    },
                    576: {
                    slidesPerView: 1,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    992: {
                    slidesPerView: 4,
                    },
                }}
              autoplay={{ delay: 4000 }}
            >
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" className='w-100' src={ProductImg} />
                <Card.Body>
                   <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                   <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                   <Button variant="primary" className='w-100'>Add To Cart</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card>
                <Card.Img variant="top" className='w-100' src={ProductImg} />
                <Card.Body>
                    <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                    <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                    <Button variant="primary" className='w-100'>Add To Cart</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card>
                <Card.Img variant="top" className='w-100' src={ProductImg} />
                <Card.Body>
                    <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                    <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                    <Button variant="primary" className='w-100'>Add To Cart</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card>
                <Card.Img variant="top" className='w-100' src={ProductImg} />
                <Card.Body>
                    <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                    <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                    <Button variant="primary" className='w-100'>Add To Cart</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card>
                <Card.Img variant="top" className='w-100' src={ProductImg} />
                <Card.Body>
                    <Card.Title>Rounded Neck T-Shirt for Kids</Card.Title>
                    <Card.Text>$10 <span className='text-decoration-line-through'>$20</span></Card.Text>
                    <Button variant="primary" className='w-100'>Add To Cart</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeaturedProducts
