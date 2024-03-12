import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap"
import { FaArrowCircleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard";

const OrganicOffer = () => {

  const [orgOffer, setOrgOffer] = useState([]);

  // Data from Data base 
  useEffect(() => {
    fetch('/organicOffer.json')
      .then(res => res.json())
      .then(data => setOrgOffer(data))
  }, [])


  return (
    <div className="organic-offer-bg my-5 py-5">
      <Container>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="organic-offer-title">
              <p>Offer</p>
              <h3>We Offer Organic For You</h3>
            </div>
            <div className="organic-offer-button">
              <Link>View All Products &nbsp;&nbsp;<FaArrowCircleRight /></Link>
            </div>
          </div>
          <div>
            <Row>
              <Row className="g-3">
                {
                  orgOffer.map((sproduct, index) => <ProductCard key={index} sproduct={sproduct} />)
                }
              </Row>
            </Row>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default OrganicOffer