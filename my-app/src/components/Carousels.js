import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        style={{height:'600px'}}
          className="d-block w-100 "
          src="https://sportshub.cbsistatic.com/i/2022/08/06/0f0ba3a3-6248-40e9-93de-3fab636b15aa/bleach-thousand-poster.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
style={{height:'600px'}}
          className="d-block w-100"
          src="https://sportshub.cbsistatic.com/i/2022/08/06/0f0ba3a3-6248-40e9-93de-3fab636b15aa/bleach-thousand-poster.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height:'600px'}}
          className="d-block w-100"
          src="https://sportshub.cbsistatic.com/i/2022/08/06/0f0ba3a3-6248-40e9-93de-3fab636b15aa/bleach-thousand-poster.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;