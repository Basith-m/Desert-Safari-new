import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import './cardSlider.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Pagination } from 'swiper/modules';
import dummy from '../../assets/safari-car.jpg'
import PackageModal from '../packageModal/PackageModal';

const CardSlider = ({ desertSafari, buggyTours, cityTours }) => {

    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };

    return (
        <>
            {
                desertSafari && (
                    <Swiper
                        navigation={true}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when window width is >= 992px
                            992: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                            },
                        }}
                    >
                        {
                            desertSafari.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card style={{ width: '20rem' }} className='card-height' onClick={() => handleShow(item)}>
                                        <Card.Img className='card-img' variant="top" src={dummy} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text className='pt-2'>
                                                <p className='opacity-75'>
                                                    <ul>
                                                        {item.services.slice(0, 2).map((service, idx) => (
                                                            <li key={idx}>{service}</li>
                                                        ))}
                                                    </ul>
                                                    {item.services.length > 2 && (
                                                        <Button variant="link">View Full Details</Button>
                                                    )}
                                                </p>
                                            </Card.Text>
                                            <div className='tripCost-text'>
                                                <span>{item.cost}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                )
            }

            {
                buggyTours && (
                    <Swiper
                        navigation={true}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when window width is >= 992px
                            992: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                            },
                        }}
                    >
                        {
                            buggyTours.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card style={{ width: '20rem' }} className='card-height' onClick={() => handleShow(item)}>
                                        <Card.Img className='card-img' variant="top" src={dummy} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text className='pt-2'>
                                                <p className='opacity-75'>
                                                    <ul>
                                                        {item.services.slice(0, 2).map((service, idx) => (
                                                            <li key={idx}>{service}</li>
                                                        ))}
                                                    </ul>
                                                    {item.services.length > 2 && (
                                                        <Button variant="link">View Full Details</Button>
                                                    )}
                                                </p>
                                            </Card.Text>
                                            <div className='tripCost-text'>
                                                <span>{item.cost}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }

            {
                cityTours && (
                    <Swiper
                        navigation={true}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when window width is >= 992px
                            992: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                            },
                        }}
                    >
                        {
                            cityTours.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card style={{ width: '20rem' }} className='card-height' onClick={() => handleShow(item)}>
                                        <Card.Img className='card-img' variant="top" src={dummy} />
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Title className='me-auto'>{item.title}</Card.Title>
                                            <Card.Text className='pt-2'>
                                                <p className='opacity-75'>
                                                    <ul>
                                                        {item.services.slice(0, 2).map((service, idx) => (
                                                            <li key={idx}>{service}</li>
                                                        ))}
                                                    </ul>
                                                    {item.services.length > 2 && (
                                                        <Button variant="link">View Full Details</Button>
                                                    )}
                                                </p>
                                            </Card.Text>
                                            <div className='tripCost-text'>
                                                <span>{item.cost}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }

            <PackageModal show={show} setShow={setShow} item={selectedItem} />
        </>
    );
}

export default CardSlider;
