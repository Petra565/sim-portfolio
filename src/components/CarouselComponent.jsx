import { useState } from 'react'

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
function CarouselComponent({ carouselImages }) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Row className="justify-content-md-center">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {carouselImages.map((carouselImage, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <Image
                                    src={carouselImage.image}
                                    style={{ height: '25rem', objectFit: 'cover', aspectRatio: '33 / 15' }}
                                    className="w-100 h-auto"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Row>
        </>
    )
}

export default CarouselComponent