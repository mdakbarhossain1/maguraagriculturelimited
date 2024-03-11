import { Col, Container, Image, Row } from "react-bootstrap"
import milkBanner from "../../assets/image/milk-banner.png";
import fruitsImage from "../../assets/image/fruits-image.png";

const HealthMessage = () => {
    return (
        <Container className="my-3">
            <Row className="gx-5">
                <Col md={6} lg={6}>
                    <div className="position-relative m-2">
                        <Image src={milkBanner} className="img-fluid" rounded />
                        <div className="text-content">
                            <p>Natural!!</p>
                            <h3>Get Farm <br />Fresh Milk</h3>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6}>
                    <div className="position-relative m-2">
                        <Image src={fruitsImage} className="img-fluid" rounded />
                        <div className="text-content">
                            <p className="mapl-green">offer!!</p>
                            <h3 className="mapl-blue">Get 10% off <br />
                                on Vegetables</h3>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default HealthMessage