import React from "react"
import Layout from "../components/layout"
import Info from '../components/home/info'
import Menu from '../components/home/menu'
import Products from '../components/home/products'
import Contact from '../components/home/contact'
import Footer from '../components/Globals/footer'
import { graphql } from 'gatsby'
const IndexPage = ({data}) => (
  <div>
   <Layout>
    </Layout>
     <Info/>
     <Menu items={data.menu}/>
     <Products/>
     <Contact/>
     <Footer/>
     </div>
);

export const query = graphql`
{
  menu:allContentfulCoffeeitem{
    edges{
     node{
      id
      title
      description
      price
      category
      image{
         fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
   }
 }


  }
`;
export default IndexPage
