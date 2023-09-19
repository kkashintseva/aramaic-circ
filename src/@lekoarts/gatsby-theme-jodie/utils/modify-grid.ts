import type { IGatsbyImageData } from "gatsby-plugin-image"

interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}

import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";



const modifyGrid = (data) => filterBySlug(data, ["/about", "/museum", "/mwa", "/NENA", "/tur"]);
export default modifyGrid


