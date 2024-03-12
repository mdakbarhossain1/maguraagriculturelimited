import { Col, Image } from "react-bootstrap";
const ProductCard = ({ sproduct }) => {
    const { name, price, rating, image, type, offerPrice } = sproduct;


    return (
        <Col md={3}>
            <div className="product-card">
                <div className="position-relative">
                    <div><Image src={image} className="img-fluid product-image" /></div>
                    <p className="product-type">{type}</p>
                    <div className="product-name">{name}</div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="product-price">
                        <del>${price}</del>
                        <span >${offerPrice}</span>
                    </div>
                    <div>
                        {rating}
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard