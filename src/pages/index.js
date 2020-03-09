import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/home/info'
import Menu from '../components/home/menu'
import Footer from '../components/Globals/footer'

const IndexPage = ({data}) => (
  <div>
   <Layout>
    </Layout>
     <Info/>
     <Menu items={data.menu}/>
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
