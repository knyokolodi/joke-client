import React from 'react';
import styled from 'styled-components';

interface LoaderProps {
  name: string;
}

const LoaderWrapper = styled.div`
  height: auto;
  width: auto;
  margin: 35% auto;
  text-align: center;
`;

const Loader: React.FC<LoaderProps> = ({ name }) => {
  return (
    <LoaderWrapper>
      <h3>{`Loading ${name}...`}</h3>
    </LoaderWrapper>
  );
};

export default Loader;
