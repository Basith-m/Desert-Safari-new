import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './cardSlider.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardSlider = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            className="mySwiper"
            breakpoints={{
                // when window width is >= 640px
                768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                // when window width is >= 768px
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                // when window width is >= 1024px
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            }}
        >
            <SwiperSlide>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>

        </Swiper>
    );
}

export default CardSlider;
