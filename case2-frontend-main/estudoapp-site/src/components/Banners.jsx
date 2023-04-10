import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel className='carrossel'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/banner-1.png"
              alt="First slide"
              
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/banner-2.png"
              alt="Second slide"
            />
    
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/banner-3.png"
              alt="Third slide"
            />
    
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default Banners