import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?
            ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
            alt="product name" />

            <div className="product__info">
                <p className="info__name">Product 1</p>
                <p className="info__description">
                    lorem ipsum dolor sit amet lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates quod iure enim, quaerat maxime fuga esse?
                </p>
                <p className="info__price">$499.99</p>

                <Link className="info__button" to="{`/product/${1111}`}">View</Link>
            </div>
        </div>
    )
}

export default Product
