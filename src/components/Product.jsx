import { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductImg from '../assets/images/mens/one.jpg';
import ProductImgThree from '../assets/images/mens/three.jpg';
import ProductImgFour from '../assets/images/mens/four.jpg';
import ProductImgFive from '../assets/images/mens/five.jpg';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const images = [ProductImg,ProductImgThree,ProductImgFour,ProductImgFive];
    const [rating, setRating] = useState(3.5)
  return (
    <>
    <div className="container py-3">
        <div className="row">
            <div className="col-12">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/shop' }}>Shop</Breadcrumb.Item>
                    <Breadcrumb.Item active>Dummy Product Title</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="row">
                    <div className="col-2">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={6}
                            direction={`vertical`}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="product-slider-thumbs"
                        >
                            {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt="" height={100} className='w-100' />
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-10">
                        <Swiper
                            style={{ "--swiper-navigation-color": "#000", "--swiper-pagination-color": "#000" }}
                            pagination={{ clickable: true }}
                            loop={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Pagination, Thumbs]}
                            className="product-slider"
                        >
                            {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt="" />
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <h2>Dummy Product Title</h2>
                <div className="d-flex align-items-center gap-2">
                    <Rating size={20} readonly initialValue={rating}/>
                    <span className="rating">10 Reviews</span>
                </div>
                <div className="detail-price my-4">
                    $10 <span className="text-decoration-line-through">$20</span>
                </div>
                <div className="desc-sett">
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
                <h6>Select Sizes:</h6>
                <div className="sizes d-flex gap-3">
                    <button className="btn btn-size">S</button>
                    <button className="btn btn-size">M</button>
                    <button className="btn btn-size">L</button>
                    <button className="btn btn-size">XL</button>
                </div>

                <div className="add-to-cart mt-4">
                    <button className="btn btn-primary text-uppercase">Add to Cart</button>
                </div>

                <hr />

                <div className="skus">
                    <span>SKUS: <strong>123456</strong></span>
                </div>
            </div>
        </div>

        <div className="row product-tabs mt-5">
            <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="description" title="Description">
                    Description Area
                </Tab>
                <Tab eventKey="reviews" title="Reviews (10)">
                    Reviews Area
                </Tab>
            </Tabs>
        </div>
    </div>
    </>
  );
};

export default Product;