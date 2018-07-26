import "typeface-open-sans";
import PropTypes from "prop-types";
import React from "react";

import Typography from "../components/Typography";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImage from '../components/Hero/hero.png';
import heroImageMobile from '../components/Hero/hero-mobile.png';
import overlayImage from '../components/Hero/hero-overlay.svg';

class Layout extends React.Component {
  constructor() {
    super();
  }

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  render() {
    const { children, data } = this.props;
    const {
      pages: { edges: pages }
    } = data;

    return (
      <div>
        <Header path={this.props.location.pathname} pages={pages}/>
        { /* Because of fixed header main contents needs some top margin */ }
        <main style={{ marginTop: '60px' }} >
          { this.isHomePage() &&
            <Hero image={heroImage} mobileImage={heroImageMobile} overlayImage={overlayImage} />
          }
          {children()}
        </main>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
            level
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
  }
`;
