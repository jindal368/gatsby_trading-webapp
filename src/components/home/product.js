import React from 'react'
import Img from 'gatsby-image';
export default function product({product}) {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">|
            <div className="card" style={{minHeight:"100%"}}>
                <Img fluid={product.image.fluid}
                 className="card-img-top"/>
                 <div className="card-body text-center">
                <h5>{product.title}</h5>
                <h4>${product.price}</h4>
                <button className="btn btn-primary text-yellow mt-3 text-capitalize snipcart-add-item"
                    data-item-id={product.id}
                    data-item-name={product.title}
                    data-item-price={product.price}
                    data-item-url="http://myapp.com/products/bacon"
                    data-item-description={product.description}
                    data-item-image={product.image.fluid.src}>
                    add to cart
                </button>
                 </div>
                </div>   
        </div>
    );
}
