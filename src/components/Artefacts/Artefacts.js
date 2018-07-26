import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {colorScheme} from "../Colors/Colors.js";

const Container = styled.div`
  width: 900px;
`;

const ItemContainer = styled.div`
  display: inline-block;
  width: 30%;
  margin: 1em;
  padding: 1em;
  background-color: ${colorScheme.primaryLight};
`;

const Item = props => {

  const { item } = props;

  return (
    <ItemContainer>
      <h2>{item.title}</h2>
      <p>
        {item.description}
      </p>
    </ItemContainer>
  )
}

const Artefacts = props => {

  const { items } = props;

  return (
    <Container>
      { items.map(item => <Item item={item} key={item.title.replace(' ', '-')} />) }
    </Container>
  );
};


export default Artefacts;
