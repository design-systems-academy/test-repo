import React from "react";
import PropTypes from "prop-types";

import styled from 'styled-components';

import Item from "./Item";


const NavbarLinks = styled.ul`
  display: flex;
  align-items: stretch;
  color: #0019af;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    const pages = props.pages
    .filter(page => page.node.fields.level == 1)
    .map(page => ({
      to: page.node.fields.slug,
      label: page.node.frontmatter.menuTitle
        ? page.node.frontmatter.menuTitle
        : page.node.frontmatter.title
    }));

    this.items = [
      { to: "/", label: "Home" },
      { to: "/blog/", label: "Blog" },
      ...pages
    ];

    this.renderedItems = []; // will contain references to rendered DOM elements of menu
  }

  render() {
    return (
      <nav rel="js-menu">
        <NavbarLinks className="itemList" ref={this.itemList}>
          {this.items.map(item => (
            <Item item={item} key={item.label} />
          ))}
        </NavbarLinks>
      </nav>
    );
  }
}

export default Menu;
