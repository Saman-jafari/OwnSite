import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SamLogo from "media/sam-e1479401383607.png";

const LogoImage = styled.img`
    width: 50%;
    height: 50%;
`;
const DivLogo = styled.div`
    display: flex;
    margin: 7rem auto;
    justify-content: center;
    position: relative;
`;

const LogoImg = props => {
    return (
        <DivLogo>
            <LogoImage src={SamLogo} alt="websiteLogo" />
        </DivLogo>
    );
};

LogoImg.propTypes = {};

export default LogoImg;
