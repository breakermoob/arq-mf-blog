import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './banner.css';


const Banner = () => {

    const images: string[] = [
        'https://arq-microfrontends-assets-lion.s3.us-west-2.amazonaws.com/images/ferrari-812.jpg',
        'https://arq-microfrontends-assets-lion.s3.us-west-2.amazonaws.com/images/toyota-sub.jpg',
        'https://arq-microfrontends-assets-lion.s3.us-west-2.amazonaws.com/images/ford-mustang-match-e.jpg',
    ]

    return (<>
        <Container fluid className="p-0">
            <Carousel indicators={false} fade className="d-flex justify-content-center align-items-end">

                {images.map(function (item) {
                    return <Carousel.Item className="carousel__item">
                        <img
                            className="d-block w-100"
                            src={item}
                            alt='banner auto'
                        />
                    </Carousel.Item>;
                })}

            </Carousel>
        </Container>
    </>)
}

export default Banner;