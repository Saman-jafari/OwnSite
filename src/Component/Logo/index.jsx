import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import SamLogo from 'media/sam-e1479401383607.png';

const LogoImg = props => {

    const LogoImage = styled.img  `
  display: flex;
  order: 2;
  margin: auto;
  width: 8%;
  height: 8%;
`;
    return (
        <Fragment>
            <LogoImage src={SamLogo} alt="websiteLogo" />
        </Fragment>
    );
};

LogoImg.propTypes = {

};

export default LogoImg;
