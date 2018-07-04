import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const FlipCard = ({children}) => {
    const flip = () => console.log('return');
    //@todo Create a flip card
    return (
        <Fragment>
            <div onMouseEnter={flip}>
            {children}
            </div>
        </Fragment>
    );
};

FlipCard.propTypes = {

};

export default FlipCard;
