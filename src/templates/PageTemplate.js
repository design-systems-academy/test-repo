import React from "react";
import PropTypes from "prop-types";

import Article from "../components/Article";
import TextBlock from "../components/TextBlock";

const PageTemplate = props => {
  const {
    data: {
      page
    }
  } = props;

  return (
    <Article>
      <TextBlock page={page} />
    </Article>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PageTemplate;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
