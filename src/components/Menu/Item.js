import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import styled from 'styled-components';

const NavbarItem = styled.li`
  position: relative;
  color: inherit;
  border: none;
  background-color: inherit;
  outline: none;
  font-size: 18px;
  padding: 0 14px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const Item = props => {
  const { item: { label, to, icon: Icon } = {}, onClick } = props;

  return (
      <NavbarItem className={"hiddenItem" in props ? "hiddenItem" : "item"} key={label}>
        <StyledLink
          to={to}
          className={"hiddenItem" in props ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {Icon && <Icon />} {label}
        </StyledLink>
      </NavbarItem>

  );
};

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func,
};

export default Item;
