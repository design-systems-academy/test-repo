import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import Menu from "../Menu";

const TopHeader = styled.header`
  z-index: 10;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  max-height: 60px;
  border-bottom: 1px solid #e0e0e1;
`;

const NavWrapper = styled.div`
  font-weight: 600;
  height: 60px;
  line-height: 60px;
  align-content: flex-start;
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  list-style: none;
  position: relative;
`;

const Logo = styled.a`
  display: flex;
  margin-left: 18px;
  width: 74px;
`;

const Header = props => (
  <TopHeader>
      <nav>
        <NavWrapper>
          <Logo data-slug="/" href="/">
            put logo here
          </Logo>
          <Menu
            path={props.path}
            pages={props.pages}
            />
        </NavWrapper>
      </nav>
  </TopHeader>
);
export default Header;
