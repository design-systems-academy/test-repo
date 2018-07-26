import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";

import Item from "./Item";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Blog = props => {
  const { posts } = props;

  return (
      <Container>
        <ul>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} />;
          })}
        </ul>
      </Container>

  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Blog;
