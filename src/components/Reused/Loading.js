import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoaderContainer>
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </LoaderContainer>
  );
};

export default Loading;

const LoaderContainer = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
