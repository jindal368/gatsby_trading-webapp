import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


import BackgroundImage from 'gatsby-background-image'

const Backgroundimage = ({ back }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "back.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920,) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={back}
          fluid={imageData}
        
        >
          <h2 className="backimage">
          </h2>
        </BackgroundImage>
      )
    }}
  />
)



export default Backgroundimage