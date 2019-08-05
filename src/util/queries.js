import { graphql, useStaticQuery } from 'gatsby';

export const getAllFluidImages = () => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              id
              fluid {
                originalName
                src
                tracedSVG
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    `
  );

  return allImageSharp.edges.map(edge => ({
    id: edge.node.id,
    name: edge.node.fluid.originalName,
    src: edge.node.fluid.src,
    svg: edge.node.fluid.tracedSVG,
    width: edge.node.fluid.presentationWidth,
    height: edge.node.fluid.presentationHeight,
  }));
};
