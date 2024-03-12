import { Col, Image } from "react-bootstrap";

const ProductCard = ({ sproduct }) => {
    const { name, price, ratting, image, type } = sproduct;
    return (
        <Col md={3}>
            <div className="product-card">
                <div><Image src={image} className="img-fluid" /></div>
                <p>{type}</p>
                <p>{name}</p>
                <p>{price}</p>
                <p>{ratting}</p>
            </div>
        </Col>
    )
}

export default ProductCard