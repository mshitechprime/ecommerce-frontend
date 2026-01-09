import Banner1 from '../assets/images/banner-1.jpg';
import LatestProducts from './common/LatestProducts';
import FeaturedProducts from './common/FeaturedProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const Home = () => {
  return (
    <>
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
      <SwiperSlide>
        <img src={Banner1} className='w-100' alt="slide1" />
      </SwiperSlide>
    </Swiper>

    <div className='container pt-5'>
        <h1>Welcome to Home Page</h1>
        <p>This is the home route of your application.</p>
    </div>

    <LatestProducts />
    <FeaturedProducts />

    </>
  );
};

export default Home;