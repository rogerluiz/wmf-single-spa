import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  width: 100%;
  height: 600px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:  1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;

const Block = styled.div`
  height: 100%;
  background: ${props => props.theme.colors[props.color]};
`;

function Box() {
  return (
    <Container>
      <Block color="gold" />
      <Block color="warning" />
      <Block color="info" />
      <Block color="cancel" />
      <Block color="negative" />
      <Block color="yellow" />
    </Container>
  )
}

export default Box;
