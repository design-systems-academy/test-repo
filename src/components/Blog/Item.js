import PropTypes from "prop-types";
import React from "react";

import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaCalendar from "react-icons/lib/fa/calendar";
import FaTag from "react-icons/lib/fa/tag";
import FaUser from "react-icons/lib/fa/user";
import GatsbyLink from "gatsby-link";

import styled from "styled-components";

const Link = styled(GatsbyLink)`
  color: black;
`;

const Item = props => {
  const {
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        cover: {
          children: [{ sizes }]
        }
      }
    }
  } = props;

  console.log(sizes);

  return (
      <li>
        <Link to={`/${slug}`} key={slug} className="link">
          <h2>
            {title} <FaArrowRight className="arrow" />
          </h2>
          <p className="meta">
            <span>
              <FaCalendar size={18} /> {prefix}
            </span>
            <span>
              <FaUser size={18} /> {author}
            </span>
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Item;
