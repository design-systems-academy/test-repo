import PropTypes from "prop-types";
import React from "react";

import Blog from "../components/Blog";
import Article from "../components/Article";

import config from "../../content/meta/config";

class BlogPage extends React.Component {

  render() {
    const {
      data: {
        posts: { edges: posts = [] }
      }
    } = this.props;

    return (
      <Article>

        <Blog posts={posts} />

      </Article>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

//hero-background
