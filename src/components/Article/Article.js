import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const ArticleStyledComponent = styled.article`
 max-width: 900px;
 margin: 0 auto;

  ol {
    margin-left: 1.3em;
    list-style-type: decimal;
  }

  ul {
    margin-left: 1.3em;
    list-style-type: square;
  }

  li {
    margin-bottom: 2px;
  }
`;

const Article = props => {
  const { children } = props;

  return (
    <ArticleStyledComponent>{children}</ArticleStyledComponent>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
