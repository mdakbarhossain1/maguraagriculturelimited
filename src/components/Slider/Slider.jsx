import { Col, Container, Row } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="hero-bg">
      <Container>
        <div className="p-3">
          <Row>
            <Col md={6} lg={6}>
              <div className="hero-content">
                <p><i>100% Natural Food</i></p>
                <h1 className="py-2">Choose the best<br />
                  healthier way<br />
                  of life</h1>
                <button >Explore Now&nbsp;&nbsp;<FaArrowCircleRight /></button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Slider