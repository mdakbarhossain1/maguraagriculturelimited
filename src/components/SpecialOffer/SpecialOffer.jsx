import { Container, Row } from "react-bootstrap"
import ProductCard from "../ProductCard/ProductCard"
import { useEffect, useState } from "react";


const SpecialOffer = () => {

    const [products, setProducts] = useState([]);
    
 // Data from Data base 
 useEffect(() => {
    fetch('/specialProduct.json')
        .then(res => res.json())
        .then(data => setProducts(data))
}, [])

    // console.log(products)

    return (
        <Container>
            <div>
                <div className="text-center title-h1"><h1>Special Offer</h1></div>
            </div>
            <div>
                <Row className="g-5">
                    {
                        products.map((sproduct,index) =><ProductCard key={index} sproduct={sproduct}/>)
                    }
                </Row>
            </div>
        </Container>
    )
}

export default SpecialOffer