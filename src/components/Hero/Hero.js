import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextContainer = styled.div`
  margin-bottom: 280px !important;

  @media only screen and (max-width: 959px) and (min-width: 640px) {
    margin-bottom: 95px !important;
  }

  @media only screen and (min-width: 1400px) {
    margin-bottom: 25% !important;
  }
`;

const Hero = props => (
  <div>
    <TextContainer>
      I am place for Hero
    </TextContainer>
  </div>
);

export default Hero;
