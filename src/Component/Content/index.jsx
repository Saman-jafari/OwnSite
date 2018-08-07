import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DivContainer = styled.div`
    display: flex;
    flex-basis: content;
    width: 100%;
    flex-direction: column;
`;

const ContainerBody = ({ children }) => {
    return <DivContainer>{children}</DivContainer>;
};

ContainerBody.propTypes = {};

export default ContainerBody;
