import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import backgroundImage from 'media/Cityoflights-e1479897891869.jpg'
import styled from 'styled-components';

const Background = props => {



    const BackgroundImage = styled.img`
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  max-height: none;
  max-width: none;
  z-index: -999999;
  top: 0;
`;

    return (
        <Fragment>
            <BackgroundImage src={backgroundImage} alt='background'/>
        </Fragment>
    );
};

Background.propTypes = {
    BackgroundImage:PropTypes.string,
};

export default Background;
