import React from 'react'
import Product from './product';
import Title from '../Globals/Title';
import {StaticQuery,graphql } from 'gatsby'


const getProducts  =graphql
` {
    products: allContentfulMenFashion {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 326) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
  `;
  

export default function products() {
    return (
       <StaticQuery 
        query={getProducts} 
        render={data =>{
           return (<section className="py-5">
               <div className="container">
                   <Title title="our products"/>
                   <div className="row">
                     {data.products.edges.map(({node:product})=>{
                      return <Product key={product.id} product={product}/>;
                     })}  
                   </div>
               </div>
           </section>

           );
       }}/>
    );
}
