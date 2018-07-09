import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import SamLogo from 'media/sam-e1479401383607.png';

const LogoImg = props => {

    const LogoImage = styled.img  `
  display: flex;
  margin: auto;
  width: 50%;
  height: 50%;
`;
    const DivLogo = styled.div `
  display: flex;
  margin: auto;
`
    return (
        <DivLogo>
            <LogoImage src={SamLogo} alt="websiteLogo" />
        </DivLogo>
    );
};

LogoImg.propTypes = {

};

export default LogoImg;
