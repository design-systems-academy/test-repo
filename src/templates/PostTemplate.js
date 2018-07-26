import PropTypes from "prop-types";
import React from "react";

require("prismjs/themes/prism-okaidia.css");

import Article from "../components/Article";
import Post from "../components/Post";

const PostTemplate = props => {
  const {
    data: {
      post,
      authornote: { html: authorNote }
    },
    pathContext: { next, prev }
  } = props;

  return (
    <Article>
      <Post
        post={post}
        next={next}
        prev={prev}
        authornote={authorNote}
      />
    </Article>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        author
        category
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    authornote: markdownRemark(id: { regex: "/author/" }) {
      id
      html
    }
  }
`;
